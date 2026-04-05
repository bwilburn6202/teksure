import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    buildStart() {
      const BASE_URL = 'https://teksure.com';
      const LASTMOD = '2026-04-05';

      const mainPages = [
        { path: '/', priority: '1.0', changefreq: 'weekly' },
        { path: '/guides', priority: '0.9', changefreq: 'daily' },
        { path: '/tools', priority: '0.8', changefreq: 'weekly' },
        { path: '/get-help', priority: '0.8', changefreq: 'monthly' },
        { path: '/pricing', priority: '0.7', changefreq: 'monthly' },
        { path: '/about', priority: '0.6', changefreq: 'monthly' },
        { path: '/how-it-works', priority: '0.7', changefreq: 'monthly' },
        { path: '/blog', priority: '0.8', changefreq: 'daily' },
        { path: '/videos', priority: '0.6', changefreq: 'weekly' },
        { path: '/sources', priority: '0.5', changefreq: 'monthly' },
        { path: '/articles', priority: '0.6', changefreq: 'weekly' },
        { path: '/quick-fixes', priority: '0.8', changefreq: 'weekly' },
        { path: '/glossary', priority: '0.7', changefreq: 'weekly' },
        { path: '/device-hub', priority: '0.6', changefreq: 'monthly' },
        { path: '/search', priority: '0.8', changefreq: 'weekly' },
        { path: '/login', priority: '0.3', changefreq: 'monthly' },
        { path: '/signup', priority: '0.3', changefreq: 'monthly' },
        { path: '/forum', priority: '0.6', changefreq: 'daily' },
        { path: '/safety/scam-alerts', priority: '0.7', changefreq: 'weekly' },
        { path: '/ai-tutor', priority: '0.7', changefreq: 'monthly' },
        { path: '/tech-anxiety', priority: '0.6', changefreq: 'monthly' },
        { path: '/local-help', priority: '0.5', changefreq: 'monthly' },
        { path: '/caregiver', priority: '0.6', changefreq: 'monthly' },
        { path: '/family-sharing', priority: '0.6', changefreq: 'monthly' },
        { path: '/progress-report', priority: '0.5', changefreq: 'monthly' },
        { path: '/tech-gift-guide', priority: '0.6', changefreq: 'monthly' },
        { path: '/certificate', priority: '0.5', changefreq: 'monthly' },
        { path: '/gift', priority: '0.6', changefreq: 'monthly' },
        { path: '/tips', priority: '0.7', changefreq: 'weekly' },
        { path: '/news', priority: '0.6', changefreq: 'daily' },
        { path: '/explore', priority: '0.6', changefreq: 'weekly' },
        { path: '/roadmap', priority: '0.5', changefreq: 'monthly' },
        { path: '/technicians', priority: '0.5', changefreq: 'monthly' },
        { path: '/book', priority: '0.7', changefreq: 'monthly' },
        { path: '/notifications', priority: '0.4', changefreq: 'monthly' },
        { path: '/tools/password-strength', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/password-manager', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/wifi-speed', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/health-check', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/device-compare', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/device-chooser', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/keyboard-shortcuts', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/email-templates', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/error-decoder', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/jargon-translator', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/quick-reference', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/troubleshooter', priority: '0.7', changefreq: 'monthly' },
        { path: '/tools/backup-wizard', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/app-recommender', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/warranty-checker', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/phishing-scanner', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/wifi-troubleshooter', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/cyber-scorecard', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/two-factor-setup', priority: '0.6', changefreq: 'monthly' },
        { path: '/tools/app-permissions', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/vpn-guide', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/accessibility-check', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/email-declutter', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/device-health', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/bluetooth-troubleshooter', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/tech-health-quiz', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/storage-cleanup', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/confidence-score', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/scam-report', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/guide-packs', priority: '0.5', changefreq: 'monthly' },
        { path: '/tools/safety-course', priority: '0.5', changefreq: 'monthly' },
        { path: '/parental-controls', priority: '0.5', changefreq: 'monthly' },
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
  plugins: [
    react(),
    // Only run sitemap in build mode — Lovable's dev environment may not have fs access
    mode === 'production' ? sitemapPlugin() : null,
  ].filter(Boolean) as Plugin[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      'react',
      'react-dom',
    ],
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
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
