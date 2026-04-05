import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "node:fs";
import path from "node:path";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = req.url ?? "/";

  try {
    const template = fs.readFileSync(
      path.resolve(process.cwd(), "dist/client/index.html"),
      "utf-8"
    );

    // Dynamic import of the pre-built server entry
    const { render } = await import("../dist/server/entry-server.js");
    const { html: appHtml, head } = await render(url);

    const finalHtml = template
      .replace("<!--ssr-head-->", head)
      .replace("<!--ssr-outlet-->", appHtml);

    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=600");
    res.status(200).end(finalHtml);
  } catch (e) {
    console.error("SSR Error:", e);
    // Fallback: serve the SPA shell without SSR content
    try {
      const fallback = fs.readFileSync(
        path.resolve(process.cwd(), "dist/client/index.html"),
        "utf-8"
      );
      res.setHeader("Content-Type", "text/html");
      res.status(200).end(fallback);
    } catch {
      res.status(500).end("Internal Server Error");
    }
  }
}
