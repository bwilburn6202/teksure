import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    buildStart() {
      const BASE_URL = 'https://teksure.com';
      const LASTMOD = '2026-03-17';

      const mainPages = [
        { path: '/', priority: '1.0', changefreq: 'weekly' },
        { path: '/guides', priority: '0.8', changefreq: 'weekly' },
        { path: '/quick-fixes', priority: '0.8', changefreq: 'weekly' },
        { path: '/glossary', priority: '0.8', changefreq: 'weekly' },
        { path: '/device-hub', priority: '0.8', changefreq: 'weekly' },
        { path: '/how-it-works', priority: '0.8', changefreq: 'weekly' },
        { path: '/pricing', priority: '0.8', changefreq: 'weekly' },
        { path: '/about', priority: '0.8', changefreq: 'weekly' },
        { path: '/search', priority: '0.8', changefreq: 'weekly' },
        { path: '/login', priority: '0.8', changefreq: 'weekly' },
        { path: '/signup', priority: '0.8', changefreq: 'weekly' },
      ];

      const guidesFile = fs.readFileSync(path.resolve(__dirname, 'src/data/guides.ts'), 'utf-8');
      const slugRegex = /slug:\s*'([^']+)'/g;
      const slugs: string[] = [];
      let m;
      while ((m = slugRegex.exec(guidesFile)) !== null) slugs.push(m[1]);

      const urls = [
        ...mainPages.map(p => `  <url>\n    <loc>${BASE_URL}${p.path}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`),
        ...slugs.map(s => `  <url>\n    <loc>${BASE_URL}/guides/${s}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`),
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
      fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemap, 'utf-8');
      console.log(`Sitemap generated with ${mainPages.length + slugs.length} URLs`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), sitemapPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
    ],
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      '@tanstack/react-query',
      'react-helmet-async',
      'sonner',
      'date-fns',
      'recharts',
      '@supabase/supabase-js',
    ],
  },
}));
