// Vercel deployment via Build Output API v3 (the layout Next.js, Nuxt, SvelteKit
// and Astro all use). Output shape:
//
//   .vercel/output/static/                  — client assets, served as files
//   .vercel/output/functions/server.func/   — Node.js serverless function
//     server.mjs                            — fetch handler (Vite SSR entry, .mjs
//                                            so Vercel loads it as ESM)
//     .vc-config.json                       — runtime + launcher config
//   .vercel/output/config.json              — version 3 deployment config
//
// Why this layout: the previous scaffold dumped the SSR bundle at
// `api/[...slug].js` and asked Vercel to auto-detect it as an Edge Function.
// Vercel runs that handler with `runtime: "edge"`, which does not have
// `node:async_hooks` available — the TanStack Start server bundle imports it
// at the top of `api/[...slug].js`, so the function fails to initialize and
// the route returns 404.
//
// Switching to the Build Output API v3 with `runtime: "nodejs22.x"` lets us
// use the real Node.js runtime (where `node:async_hooks` works natively),
// and the `config.json` rewrites give us deterministic routing through the
// `filesystem` handle (so /assets/* and /og-image.jpg bypass the function).
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { mkdirSync, renameSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const STATIC_DIR = ".vercel/output/static";
const FUNC_DIR = ".vercel/output/functions/server.func";
const FUNC_ENTRY = `${FUNC_DIR}/server.mjs`;
const FUNC_CONFIG = `${FUNC_DIR}/.vc-config.json`;
const DEPLOY_CONFIG = ".vercel/output/config.json";

// Runs after Vite finishes the SSR build. Renames the SSR server entry,
// moves client + public assets into the Build Output API v3 layout, and
// writes the function + deployment configs.
//
// We use `closeBundle` scoped to the SSR environment (via applyToEnvironment)
// because `buildEnd` for the SSR environment does not fire reliably inside
// Vite 7's environments API when a plugin is registered at the top level.
// Scoping the plugin to the SSR env lets us run only after the SSR bundle
// is fully written.
function vercelBuildOutput() {
  return {
    name: "vercel-build-output",
    applyToEnvironment(env) {
      return env.name === "ssr";
    },
    enforce: "post" as const,
    closeBundle() {
      const root = process.cwd();

      // Vite emits the "server" entry as `<ssrOutDir>/server.mjs` plus
      // `<ssrOutDir>/assets/*` for shared chunks. The chunks import the
      // entry via `./server.mjs` because we set the .mjs extension in
      // entryFileNames above.
      const ssrOutDir = resolve(root, ".vercel/output/functions-tmp");
      const ssrEntry = resolve(ssrOutDir, "server.mjs");
      const ssrAssets = resolve(ssrOutDir, "assets");
      if (!existsSync(ssrEntry)) {
        throw new Error(
          `vercelBuildOutput: expected SSR entry at ${ssrEntry} but it was not produced. ` +
            `Check the environments.ssr.build.outDir setting.`,
        );
      }

      // 1. Move SSR build into the function dir.
      mkdirSync(FUNC_DIR, { recursive: true });
      renameSync(ssrEntry, FUNC_ENTRY);
      if (existsSync(ssrAssets)) {
        // The bundle imports other chunks via relative paths like
        // `./assets/<chunk>.js`. Keep that structure under the function dir
        // so dynamic imports resolve at runtime.
        const destAssets = resolve(FUNC_DIR, "assets");
        if (existsSync(destAssets)) rmSync(destAssets, { recursive: true, force: true });
        renameSync(ssrAssets, destAssets);
      }
      if (existsSync(ssrOutDir)) rmSync(ssrOutDir, { recursive: true, force: true });

      // 2. Move client build into the static dir. Vite's publicDir feature
      //    copies files from `publicDir` (project-root public/) into the
      //    outDir automatically, so og-image.jpg etc. are already present.
      const staticTmp = resolve(root, ".vercel/output/static-tmp");
      if (existsSync(staticTmp)) {
        if (existsSync(STATIC_DIR)) rmSync(STATIC_DIR, { recursive: true, force: true });
        renameSync(staticTmp, STATIC_DIR);
      }

      // 3. Function config. Node.js runtime with `fetch` handler (the SSR
      //    bundle exports a `fetch` function that accepts a Web Request).
      writeFileSync(
        FUNC_CONFIG,
        JSON.stringify(
          {
            runtime: "nodejs22.x",
            handler: "server.mjs",
            launcherType: "Nodejs",
            shouldAddHelpers: false,
            supportsResponseStreaming: true,
          },
          null,
          2,
        ),
      );

      // 3b. Marker package.json so the Node runtime loads the chunked
      //     `.js` assets as ESM. The previous fix only renamed
      //     `server.mjs` (the entry) — the dynamic-imported chunks in
      //     `assets/*.js` still contain `import` statements. Vercel's
      //     Node 22 runtime treats `.js` as CommonJS by default, so each
      //     chunk crashes with
      //     `SyntaxError: Cannot use import statement outside a module`.
      //     Writing `{"type":"module"}` into the function dir makes Node
      //     load every `.js` file in the function as ESM and the dynamic
      //     `import("./assets/router-*.js")` resolves cleanly.
      writeFileSync(
        resolve(FUNC_DIR, "package.json"),
        JSON.stringify({ type: "module" }, null, 2),
      );

      // 4. Deployment config. `handle: "filesystem"` serves anything in
      //    .vercel/output/static/ directly; everything else (including the
      //    root /) is routed to the catch-all server function.
      writeFileSync(
        DEPLOY_CONFIG,
        JSON.stringify(
          {
            version: 3,
            routes: [
              { handle: "filesystem" },
              { src: "/(.*)", dest: "/server" },
            ],
          },
          null,
          2,
        ),
      );

      console.log(`vercelBuildOutput: wrote ${DEPLOY_CONFIG}, ${FUNC_CONFIG}, ${FUNC_ENTRY}`);
    },
  };
}

export default defineConfig({
  publicDir: "public",
  plugins: [
    tsConfigPaths(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    tanstackStart({}),
    react(),
    tailwindcss(),
    vercelBuildOutput(),
  ],
  environments: {
    client: {
      build: {
        outDir: ".vercel/output/static-tmp",
        emptyOutDir: true,
      },
    },
    ssr: {
      build: {
        outDir: ".vercel/output/functions-tmp",
        emptyOutDir: true,
        // Bundle all dependencies into server.js so the function is
        // self-contained when Vercel deploys it. Without this, the SSR
        // bundle emits `import` statements for packages like `h3-v2`,
        // `seroval`, `@tanstack/router-core`, etc. that Vercel cannot
        // resolve because it does not deploy `node_modules/` alongside
        // Build Output API v3 functions, and the function crashes with
        // FUNCTION_INVOCATION_FAILED at request time.
        rollupOptions: {
          output: {
            entryFileNames: (chunkInfo) => {
              // Use .mjs so the file is loaded as an ES module at runtime.
              // Vercel's Node.js runtime loads .js as CommonJS unless a
              // package.json with "type": "module" is present in the
              // function dir, which we don't ship. .mjs forces ESM
              // regardless and matches what the chunk URLs in assets/
              // import from.
              if (chunkInfo.name === "server") return "server.mjs";
              return "assets/[name]-[hash].js";
            },
          },
        },
      },
      // Tell Rollup to inline every dependency. The TanStack Start plugin
      // only adds its own packages to noExternal by default, leaving the
      // rest as `import` statements in the emitted bundle.
      resolve: {
        noExternal: true,
      },
    },
  },
});
