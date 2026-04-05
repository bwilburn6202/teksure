// vite.config.ts
import { defineConfig } from "file:///sessions/fervent-gifted-hawking/mnt/TekSure/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/fervent-gifted-hawking/mnt/TekSure/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import fs from "fs";
var __vite_injected_original_dirname = "/sessions/fervent-gifted-hawking/mnt/TekSure";
function sitemapPlugin() {
  return {
    name: "generate-sitemap",
    buildStart() {
      const BASE_URL = "https://teksure.com";
      const LASTMOD = "2026-03-17";
      const mainPages = [
        { path: "/", priority: "1.0", changefreq: "weekly" },
        { path: "/guides", priority: "0.8", changefreq: "weekly" },
        { path: "/quick-fixes", priority: "0.8", changefreq: "weekly" },
        { path: "/glossary", priority: "0.8", changefreq: "weekly" },
        { path: "/device-hub", priority: "0.8", changefreq: "weekly" },
        { path: "/how-it-works", priority: "0.8", changefreq: "weekly" },
        { path: "/pricing", priority: "0.8", changefreq: "weekly" },
        { path: "/about", priority: "0.8", changefreq: "weekly" },
        { path: "/search", priority: "0.8", changefreq: "weekly" },
        { path: "/login", priority: "0.8", changefreq: "weekly" },
        { path: "/signup", priority: "0.8", changefreq: "weekly" }
      ];
      const guidesFile = fs.readFileSync(path.resolve(__vite_injected_original_dirname, "src/data/guides.ts"), "utf-8");
      const slugRegex = /slug:\s*'([^']+)'/g;
      const slugs = [];
      let m;
      while ((m = slugRegex.exec(guidesFile)) !== null) slugs.push(m[1]);
      const urls = [
        ...mainPages.map((p) => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`),
        ...slugs.map((s) => `  <url>
    <loc>${BASE_URL}/guides/${s}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`)
      ];
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
      fs.writeFileSync(path.resolve(__vite_injected_original_dirname, "public/sitemap.xml"), sitemap, "utf-8");
      console.log(`Sitemap generated with ${mainPages.length + slugs.length} URLs`);
    }
  };
}
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    // Only run sitemap in build mode — Lovable's dev environment may not have fs access
    mode === "production" ? sitemapPlugin() : null
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    dedupe: [
      "react",
      "react-dom"
    ]
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom"
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-router-dom/") || id.includes("node_modules/@remix-run/")) {
            return "vendor-router";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-motion";
          }
          if (id.includes("node_modules/@supabase")) {
            return "vendor-supabase";
          }
          if (id.includes("node_modules/@radix-ui") || id.includes("node_modules/class-variance-authority") || id.includes("node_modules/cmdk") || id.includes("node_modules/vaul") || id.includes("node_modules/embla-carousel")) return "vendor-ui";
          if (id.includes("node_modules/@tanstack")) {
            return "vendor-query";
          }
          if (id.includes("node_modules/react-hook-form") || id.includes("node_modules/@hookform") || id.includes("node_modules/zod")) return "vendor-forms";
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvZmVydmVudC1naWZ0ZWQtaGF3a2luZy9tbnQvVGVrU3VyZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2ZlcnZlbnQtZ2lmdGVkLWhhd2tpbmcvbW50L1Rla1N1cmUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nlc3Npb25zL2ZlcnZlbnQtZ2lmdGVkLWhhd2tpbmcvbW50L1Rla1N1cmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuZnVuY3Rpb24gc2l0ZW1hcFBsdWdpbigpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdnZW5lcmF0ZS1zaXRlbWFwJyxcbiAgICBidWlsZFN0YXJ0KCkge1xuICAgICAgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly90ZWtzdXJlLmNvbSc7XG4gICAgICBjb25zdCBMQVNUTU9EID0gJzIwMjYtMDMtMTcnO1xuXG4gICAgICBjb25zdCBtYWluUGFnZXMgPSBbXG4gICAgICAgIHsgcGF0aDogJy8nLCBwcmlvcml0eTogJzEuMCcsIGNoYW5nZWZyZXE6ICd3ZWVrbHknIH0sXG4gICAgICAgIHsgcGF0aDogJy9ndWlkZXMnLCBwcmlvcml0eTogJzAuOCcsIGNoYW5nZWZyZXE6ICd3ZWVrbHknIH0sXG4gICAgICAgIHsgcGF0aDogJy9xdWljay1maXhlcycsIHByaW9yaXR5OiAnMC44JywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL2dsb3NzYXJ5JywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgICB7IHBhdGg6ICcvZGV2aWNlLWh1YicsIHByaW9yaXR5OiAnMC44JywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL2hvdy1pdC13b3JrcycsIHByaW9yaXR5OiAnMC44JywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL3ByaWNpbmcnLCBwcmlvcml0eTogJzAuOCcsIGNoYW5nZWZyZXE6ICd3ZWVrbHknIH0sXG4gICAgICAgIHsgcGF0aDogJy9hYm91dCcsIHByaW9yaXR5OiAnMC44JywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL3NlYXJjaCcsIHByaW9yaXR5OiAnMC44JywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL2xvZ2luJywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgICB7IHBhdGg6ICcvc2lnbnVwJywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgXTtcblxuICAgICAgY29uc3QgZ3VpZGVzRmlsZSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2RhdGEvZ3VpZGVzLnRzJyksICd1dGYtOCcpO1xuICAgICAgY29uc3Qgc2x1Z1JlZ2V4ID0gL3NsdWc6XFxzKicoW14nXSspJy9nO1xuICAgICAgY29uc3Qgc2x1Z3M6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgbTtcbiAgICAgIHdoaWxlICgobSA9IHNsdWdSZWdleC5leGVjKGd1aWRlc0ZpbGUpKSAhPT0gbnVsbCkgc2x1Z3MucHVzaChtWzFdKTtcblxuICAgICAgY29uc3QgdXJscyA9IFtcbiAgICAgICAgLi4ubWFpblBhZ2VzLm1hcChwID0+IGAgIDx1cmw+XFxuICAgIDxsb2M+JHtCQVNFX1VSTH0ke3AucGF0aH08L2xvYz5cXG4gICAgPGxhc3Rtb2Q+JHtMQVNUTU9EfTwvbGFzdG1vZD5cXG4gICAgPGNoYW5nZWZyZXE+JHtwLmNoYW5nZWZyZXF9PC9jaGFuZ2VmcmVxPlxcbiAgICA8cHJpb3JpdHk+JHtwLnByaW9yaXR5fTwvcHJpb3JpdHk+XFxuICA8L3VybD5gKSxcbiAgICAgICAgLi4uc2x1Z3MubWFwKHMgPT4gYCAgPHVybD5cXG4gICAgPGxvYz4ke0JBU0VfVVJMfS9ndWlkZXMvJHtzfTwvbG9jPlxcbiAgICA8bGFzdG1vZD4ke0xBU1RNT0R9PC9sYXN0bW9kPlxcbiAgICA8Y2hhbmdlZnJlcT5tb250aGx5PC9jaGFuZ2VmcmVxPlxcbiAgICA8cHJpb3JpdHk+MC42PC9wcmlvcml0eT5cXG4gIDwvdXJsPmApLFxuICAgICAgXTtcblxuICAgICAgY29uc3Qgc2l0ZW1hcCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cXG48dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPlxcbiR7dXJscy5qb2luKCdcXG4nKX1cXG48L3VybHNldD5cXG5gO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncHVibGljL3NpdGVtYXAueG1sJyksIHNpdGVtYXAsICd1dGYtOCcpO1xuICAgICAgY29uc29sZS5sb2coYFNpdGVtYXAgZ2VuZXJhdGVkIHdpdGggJHttYWluUGFnZXMubGVuZ3RoICsgc2x1Z3MubGVuZ3RofSBVUkxzYCk7XG4gICAgfSxcbiAgfTtcbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgLy8gT25seSBydW4gc2l0ZW1hcCBpbiBidWlsZCBtb2RlIFx1MjAxNCBMb3ZhYmxlJ3MgZGV2IGVudmlyb25tZW50IG1heSBub3QgaGF2ZSBmcyBhY2Nlc3NcbiAgICBtb2RlID09PSAncHJvZHVjdGlvbicgPyBzaXRlbWFwUGx1Z2luKCkgOiBudWxsLFxuICBdLmZpbHRlcihCb29sZWFuKSBhcyBQbHVnaW5bXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICAgIGRlZHVwZTogW1xuICAgICAgJ3JlYWN0JyxcbiAgICAgICdyZWFjdC1kb20nLFxuICAgIF0sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcbiAgICAgICdyZWFjdCcsXG4gICAgICAncmVhY3QtZG9tJyxcbiAgICBdLFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAvLyBOT1RFOiBSZWFjdC9yZWFjdC1kb20gYXJlIGludGVudGlvbmFsbHkgTk9UIG1hbnVhbGx5IGNodW5rZWQuXG4gICAgICAgICAgLy8gTWFudWFsbHkgc3BsaXR0aW5nIFJlYWN0IGNhdXNlcyBhIGxvYWQtb3JkZXIgcmFjZSB3aGVyZSB2ZW5kb3ItcXVlcnlcbiAgICAgICAgICAvLyAoVGFuU3RhY2spIGNhbiBleGVjdXRlIGJlZm9yZSB2ZW5kb3ItcmVhY3QgaW5pdGlhbGlzZXMsIHJlc3VsdGluZyBpblxuICAgICAgICAgIC8vIFwiQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiBudWxsIChyZWFkaW5nICd1c2VFZmZlY3QnKVwiLlxuICAgICAgICAgIC8vIHJlc29sdmUuZGVkdXBlIGFib3ZlIGFscmVhZHkgZ3VhcmFudGVlcyBhIHNpbmdsZSBSZWFjdCBpbnN0YW5jZS5cblxuICAgICAgICAgIC8vIFJvdXRlciBcdTIwMTQgbmVlZGVkIG9uIGV2ZXJ5IHBhZ2VcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tLycpIHx8IGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi8nKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3Itcm91dGVyJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGcmFtZXIgTW90aW9uIFx1MjAxNCBhbmltYXRpb24gbGlicmFyeSwgbGFyZ2UsIGxvYWRlZCBsYXppbHlcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yLW1vdGlvbic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3VwYWJhc2UgXHUyMDE0IG9ubHkgbG9hZGVkIHdoZW4gYXV0aC9kYiBpcyBuZWVkZWRcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9Ac3VwYWJhc2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3Itc3VwYWJhc2UnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJhZGl4IFVJICsgc2hhZGNuIHV0aWxpdGllcyBcdTIwMTQgbGFyZ2UgVUkgcHJpbWl0aXZlc1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvQHJhZGl4LXVpJykgfHxcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JykgfHxcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvY21kaycpIHx8XG4gICAgICAgICAgICBpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3ZhdWwnKSB8fFxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbCcpXG4gICAgICAgICAgKSByZXR1cm4gJ3ZlbmRvci11aSc7XG5cbiAgICAgICAgICAvLyBUYW5TdGFjayBRdWVyeVxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL0B0YW5zdGFjaycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvci1xdWVyeSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRm9ybXMgKyB2YWxpZGF0aW9uXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9yZWFjdC1ob29rLWZvcm0nKSB8fFxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9AaG9va2Zvcm0nKSB8fFxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy96b2QnKVxuICAgICAgICAgICkgcmV0dXJuICd2ZW5kb3ItZm9ybXMnO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVCxTQUFTLG9CQUE0QjtBQUMzVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sUUFBUTtBQUhmLElBQU0sbUNBQW1DO0FBS3pDLFNBQVMsZ0JBQXdCO0FBQy9CLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFDWCxZQUFNLFdBQVc7QUFDakIsWUFBTSxVQUFVO0FBRWhCLFlBQU0sWUFBWTtBQUFBLFFBQ2hCLEVBQUUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLFNBQVM7QUFBQSxRQUNuRCxFQUFFLE1BQU0sV0FBVyxVQUFVLE9BQU8sWUFBWSxT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
