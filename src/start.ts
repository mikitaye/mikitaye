import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    // Log the error so we can see it in the Vercel function logs.
    console.error("[errorMiddleware] caught error:", error);
    if (error instanceof Error) {
      console.error("[errorMiddleware] stack:", error.stack);
      console.error("[errorMiddleware] keys:", Object.getOwnPropertyNames(error));
    }
    return new Response(renderErrorPage(error), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
