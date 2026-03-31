// vite.config.ts
import { defineConfig } from "file:///sessions/vigilant-sleepy-carson/mnt/teksure/node_modules/vite/dist/node/index.js";
import react from "file:///sessions/vigilant-sleepy-carson/mnt/teksure/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import fs from "fs";
import { componentTagger } from "file:///sessions/vigilant-sleepy-carson/mnt/teksure/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/sessions/vigilant-sleepy-carson/mnt/teksure";
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
  plugins: [react(), sitemapPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvdmlnaWxhbnQtc2xlZXB5LWNhcnNvbi9tbnQvdGVrc3VyZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL3ZpZ2lsYW50LXNsZWVweS1jYXJzb24vbW50L3Rla3N1cmUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nlc3Npb25zL3ZpZ2lsYW50LXNsZWVweS1jYXJzb24vbW50L3Rla3N1cmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuXG5mdW5jdGlvbiBzaXRlbWFwUGx1Z2luKCk6IFBsdWdpbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2dlbmVyYXRlLXNpdGVtYXAnLFxuICAgIGJ1aWxkU3RhcnQoKSB7XG4gICAgICBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3Rla3N1cmUuY29tJztcbiAgICAgIGNvbnN0IExBU1RNT0QgPSAnMjAyNi0wMy0xNyc7XG5cbiAgICAgIGNvbnN0IG1haW5QYWdlcyA9IFtcbiAgICAgICAgeyBwYXRoOiAnLycsIHByaW9yaXR5OiAnMS4wJywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL2d1aWRlcycsIHByaW9yaXR5OiAnMC44JywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL3F1aWNrLWZpeGVzJywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgICB7IHBhdGg6ICcvZ2xvc3NhcnknLCBwcmlvcml0eTogJzAuOCcsIGNoYW5nZWZyZXE6ICd3ZWVrbHknIH0sXG4gICAgICAgIHsgcGF0aDogJy9kZXZpY2UtaHViJywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgICB7IHBhdGg6ICcvaG93LWl0LXdvcmtzJywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgICB7IHBhdGg6ICcvcHJpY2luZycsIHByaW9yaXR5OiAnMC44JywgY2hhbmdlZnJlcTogJ3dlZWtseScgfSxcbiAgICAgICAgeyBwYXRoOiAnL2Fib3V0JywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgICB7IHBhdGg6ICcvc2VhcmNoJywgcHJpb3JpdHk6ICcwLjgnLCBjaGFuZ2VmcmVxOiAnd2Vla2x5JyB9LFxuICAgICAgICB7IHBhdGg6ICcvbG9naW4nLCBwcmlvcml0eTogJzAuOCcsIGNoYW5nZWZyZXE6ICd3ZWVrbHknIH0sXG4gICAgICAgIHsgcGF0aDogJy9zaWdudXAnLCBwcmlvcml0eTogJzAuOCcsIGNoYW5nZWZyZXE6ICd3ZWVrbHknIH0sXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBndWlkZXNGaWxlID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvZGF0YS9ndWlkZXMudHMnKSwgJ3V0Zi04Jyk7XG4gICAgICBjb25zdCBzbHVnUmVnZXggPSAvc2x1ZzpcXHMqJyhbXiddKyknL2c7XG4gICAgICBjb25zdCBzbHVnczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBtO1xuICAgICAgd2hpbGUgKChtID0gc2x1Z1JlZ2V4LmV4ZWMoZ3VpZGVzRmlsZSkpICE9PSBudWxsKSBzbHVncy5wdXNoKG1bMV0pO1xuXG4gICAgICBjb25zdCB1cmxzID0gW1xuICAgICAgICAuLi5tYWluUGFnZXMubWFwKHAgPT4gYCAgPHVybD5cXG4gICAgPGxvYz4ke0JBU0VfVVJMfSR7cC5wYXRofTwvbG9jPlxcbiAgICA8bGFzdG1vZD4ke0xBU1RNT0R9PC9sYXN0bW9kPlxcbiAgICA8Y2hhbmdlZnJlcT4ke3AuY2hhbmdlZnJlcX08L2NoYW5nZWZyZXE+XFxuICAgIDxwcmlvcml0eT4ke3AucHJpb3JpdHl9PC9wcmlvcml0eT5cXG4gIDwvdXJsPmApLFxuICAgICAgICAuLi5zbHVncy5tYXAocyA9PiBgICA8dXJsPlxcbiAgICA8bG9jPiR7QkFTRV9VUkx9L2d1aWRlcy8ke3N9PC9sb2M+XFxuICAgIDxsYXN0bW9kPiR7TEFTVE1PRH08L2xhc3Rtb2Q+XFxuICAgIDxjaGFuZ2VmcmVxPm1vbnRobHk8L2NoYW5nZWZyZXE+XFxuICAgIDxwcmlvcml0eT4wLjY8L3ByaW9yaXR5PlxcbiAgPC91cmw+YCksXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBzaXRlbWFwID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Plxcbjx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+XFxuJHt1cmxzLmpvaW4oJ1xcbicpfVxcbjwvdXJsc2V0PlxcbmA7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMvc2l0ZW1hcC54bWwnKSwgc2l0ZW1hcCwgJ3V0Zi04Jyk7XG4gICAgICBjb25zb2xlLmxvZyhgU2l0ZW1hcCBnZW5lcmF0ZWQgd2l0aCAke21haW5QYWdlcy5sZW5ndGggKyBzbHVncy5sZW5ndGh9IFVSTHNgKTtcbiAgICB9LFxuICB9O1xufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gICAgaG1yOiB7XG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgc2l0ZW1hcFBsdWdpbigpLCBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCldLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVCxTQUFTLG9CQUE0QjtBQUMzVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sUUFBUTtBQUNmLFNBQVMsdUJBQXVCO0FBSmhDLElBQU0sbUNBQW1DO0FBTXpDLFNBQVMsZ0JBQXdCO0FBQy9CLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFDWCxZQUFNLFdBQVc7QUFDakIsWUFBTSxVQUFVO0FBRWhCLFlBQU0sWUFBWTtBQUFBLFFBQ2hCLEVBQUUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLFNBQVM7QUFBQSxRQUNuRCxFQUFFLE1BQU0sV0FBVyxVQUFVLE9BQU8sWUFBWSxTQUFTO0FBQUEsUUFDekQsRUFBRSxNQUFNLGdCQUFnQixVQUFVLE9BQU8sWUFBWSxTQUFTO0FBQUEsUUFDOUQsRUFBRSxNQUFNLGFBQWEsVUFBVSxPQUFPLFlBQVksU0FBUztBQUFBLFFBQzNELEVBQUUsTUFBTSxlQUFlLFVBQVUsT0FBTyxZQUFZLFNBQVM7QUFBQSxRQUM3RCxFQUFFLE1BQU0saUJBQWlCLFVBQVUsT0FBTyxZQUFZLFNBQVM7QUFBQSxRQUMvRCxFQUFFLE1BQU0sWUFBWSxVQUFVLE9BQU8sWUFBWSxTQUFTO0FBQUEsUUFDMUQsRUFBRSxNQUFNLFVBQVUsVUFBVSxPQUFPLFlBQVksU0FBUztBQUFBLFFBQ3hELEVBQUUsTUFBTSxXQUFXLFVBQVUsT0FBTyxZQUFZLFNBQVM7QUFBQSxRQUN6RCxFQUFFLE1BQU0sVUFBVSxVQUFVLE9BQU8sWUFBWSxTQUFTO0FBQUEsUUFDeEQsRUFBRSxNQUFNLFdBQVcsVUFBVSxPQUFPLFlBQVksU0FBUztBQUFBLE1BQzNEO0FBRUEsWUFBTSxhQUFhLEdBQUcsYUFBYSxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CLEdBQUcsT0FBTztBQUN6RixZQUFNLFlBQVk7QUFDbEIsWUFBTSxRQUFrQixDQUFDO0FBQ3pCLFVBQUk7QUFDSixjQUFRLElBQUksVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFNLE9BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQztBQUVqRSxZQUFNLE9BQU87QUFBQSxRQUNYLEdBQUcsVUFBVSxJQUFJLE9BQUs7QUFBQSxXQUFxQixRQUFRLEdBQUcsRUFBRSxJQUFJO0FBQUEsZUFBd0IsT0FBTztBQUFBLGtCQUErQixFQUFFLFVBQVU7QUFBQSxnQkFBZ0MsRUFBRSxRQUFRO0FBQUEsU0FBdUI7QUFBQSxRQUN2TSxHQUFHLE1BQU0sSUFBSSxPQUFLO0FBQUEsV0FBcUIsUUFBUSxXQUFXLENBQUM7QUFBQSxlQUF3QixPQUFPO0FBQUE7QUFBQTtBQUFBLFNBQTBGO0FBQUEsTUFDdEw7QUFFQSxZQUFNLFVBQVU7QUFBQTtBQUFBLEVBQXlHLEtBQUssS0FBSyxJQUFJLENBQUM7QUFBQTtBQUFBO0FBQ3hJLFNBQUcsY0FBYyxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CLEdBQUcsU0FBUyxPQUFPO0FBQ2hGLGNBQVEsSUFBSSwwQkFBMEIsVUFBVSxTQUFTLE1BQU0sTUFBTSxPQUFPO0FBQUEsSUFDOUU7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLEdBQUcsU0FBUyxpQkFBaUIsZ0JBQWdCLENBQUMsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUMvRixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
