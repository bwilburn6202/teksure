import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 4173;

async function createServer() {
  const app = express();

  let vite: Awaited<ReturnType<typeof import("vite")["createServer"]>> | undefined;

  if (isProduction) {
    const compression = (await import("compression")).default;
    const sirv = (await import("sirv")).default;
    app.use(compression());
    app.use(sirv(path.resolve(__dirname, "dist/client"), { extensions: [] }));
  } else {
    // In dev, use Vite's middleware for HMR and module transformation
    const { createServer: createViteServer } = await import("vite");
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  }

  app.use("*", async (req, res) => {
    const url = req.originalUrl;

    try {
      // 1. Read the HTML template
      let template: string;
      let render: (url: string) => Promise<{ html: string; head: string }>;

      if (isProduction) {
        template = fs.readFileSync(
          path.resolve(__dirname, "dist/client/index.html"),
          "utf-8"
        );
        // Load the pre-built server entry
        const mod = await import("./dist/server/entry-server.js");
        render = mod.render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        // In dev, Vite transforms the module on the fly
        template = await vite!.transformIndexHtml(url, template);
        const mod = await vite!.ssrLoadModule("/src/entry-server.tsx");
        render = mod.render;
      }

      // 2. Render the app HTML and extract head tags
      const { html: appHtml, head } = await render(url);

      // 3. Inject the rendered HTML into the template
      const finalHtml = template
        .replace("<!--ssr-head-->", head)
        .replace("<!--ssr-outlet-->", appHtml);

      // 4. Send the response
      res.status(200).set({ "Content-Type": "text/html" }).end(finalHtml);
    } catch (e) {
      // In dev, let Vite fix the stack trace for better DX
      if (vite) {
        vite.ssrFixStacktrace(e as Error);
      }
      console.error(e);
      res.status(500).end((e as Error).message);
    }
  });

  app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port}`);
  });
}

createServer();
