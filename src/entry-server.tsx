import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetServerState } from "react-helmet-async";
import { AppShell } from "./App";
import { PassThrough } from "node:stream";

/**
 * Render the app to HTML for the given URL.
 *
 * Uses React 18's streaming renderer (renderToPipeableStream) which properly
 * resolves lazy-loaded route components inside Suspense boundaries, producing
 * complete page HTML with SEO head tags on the server.
 */
export function render(url: string): Promise<{ html: string; head: string }> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const passThrough = new PassThrough();

    passThrough.on("data", (chunk: Buffer) => chunks.push(chunk));
    passThrough.on("end", () => {
      const html = Buffer.concat(chunks).toString("utf-8");

      const { helmet } = helmetContext;
      const head = [
        helmet?.title?.toString() ?? "",
        helmet?.meta?.toString() ?? "",
        helmet?.link?.toString() ?? "",
        helmet?.script?.toString() ?? "",
      ]
        .filter(Boolean)
        .join("\n    ");

      resolve({ html, head });
    });
    passThrough.on("error", reject);

    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppShell helmetContext={helmetContext} />
      </StaticRouter>,
      {
        onAllReady() {
          // All Suspense boundaries have resolved — pipe the complete HTML
          pipe(passThrough);
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });
}
