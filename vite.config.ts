import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

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
  plugins: [react(), sitemapPlugin()],
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
      '@radix-ui/react-tooltip',
      '@radix-ui/react-dialog',
      '@radix-ui/react-popover',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-accordion',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-slot',
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // NOTE: React/react-dom are intentionally NOT manually chunked.
          // Manually splitting React causes a load-order race where vendor-query
          // (TanStack) can execute before vendor-react initialises, resulting in
          // "Cannot read properties of null (reading 'useEffect')".
          // resolve.dedupe above already guarantees a single React instance.

          // Router — needed on every page
          if (id.includes('node_modules/react-router-dom/') || id.includes('node_modules/@remix-run/')) {
            return 'vendor-router';
          }

          // Framer Motion — animation library, large, loaded lazily
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }

          // Supabase — only loaded when auth/db is needed
          if (id.includes('node_modules/@supabase')) {
            return 'vendor-supabase';
          }

          // Radix UI + shadcn utilities — large UI primitives
          if (
            id.includes('node_modules/@radix-ui') ||
            id.includes('node_modules/class-variance-authority') ||
            id.includes('node_modules/cmdk') ||
            id.includes('node_modules/vaul') ||
            id.includes('node_modules/embla-carousel')
          ) return 'vendor-ui';

          // TanStack Query
          if (id.includes('node_modules/@tanstack')) {
            return 'vendor-query';
          }

          // Forms + validation
          if (
            id.includes('node_modules/react-hook-form') ||
            id.includes('node_modules/@hookform') ||
            id.includes('node_modules/zod')
          ) return 'vendor-forms';
        },
      },
    },
  },
}));
