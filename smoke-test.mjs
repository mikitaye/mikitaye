// Smoke test for the Vercel deployment output.
//
// Invokes the bundled server function with a Request and prints the
// response status, content-type, and a short head of the body. Exercises:
//
//   - GET /                 -> 200, text/html (the rendered app shell)
//   - GET /no-such-route    -> 404, text/html (TanStack NotFoundComponent)
//
// Used during development to confirm that the Build Output API v3 layout
// produces a working server function before pushing to Vercel.
import server from "./.vercel/output/functions/server.func/server.mjs";

async function probe(label, url, headers = {}) {
  const req = new Request(url, {
    headers: { Accept: "text/html", ...headers },
  });
  const res = await server.fetch(req);
  const ct = res.headers.get("content-type") || "";
  const body = await res.text();
  const kind = ct.includes("text/html")
    ? "html"
    : ct.includes("application/json") || body.trimStart().startsWith("{")
      ? "json"
      : "other";
  const firstLine = body.split("\n", 1)[0].slice(0, 120);
  console.log(
    `[${label}] status=${res.status} ct=${ct.split(";")[0]} ` +
      `kind=${kind} len=${body.length} head=${JSON.stringify(firstLine)}`,
  );
  return { status: res.status, ct, kind, body };
}

const home = await probe("home", "http://localhost/");
const missing = await probe("404", "http://localhost/this-route-does-not-exist");

// Hard fail if the success path returns anything other than 200/html.
if (home.status !== 200 || home.kind !== "html") {
  console.error("FAIL: home did not return 200 html");
  process.exit(1);
}
if (missing.status !== 404 || missing.kind !== "html") {
  console.error("FAIL: 404 path did not return 404 html");
  process.exit(1);
}
console.log("OK");
