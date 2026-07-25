import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// NOTE: sitemap generation lives in scripts/generate-sitemap.mjs and runs in the
// npm `prebuild` step. A duplicate Vite plugin used to regenerate it at buildStart
// with only guide URLs (no tools) at the non-canonical apex host, silently
// overwriting the good sitemap. Do not reintroduce it here.

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
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
    // Restrict dep scanning to the client entry only.
    // Without this, Vite crawls entry-server.tsx, discovers react-dom/server,
    // and triggers a partial re-optimisation mid-session. That partial run
    // assigns a NEW browserHash to React DOM while React keeps the old hash,
    // producing two separate ReactCurrentDispatcher instances and the
    // "Cannot read properties of null (reading 'useState')" crash.
    entries: ['index.html'],
    include: [
      'react',
      'react-dom',
    ],
    exclude: [
      'react-dom/server',
    ],
  },
  ssr: {
    noExternal: [
      // Ensure these packages are bundled into the SSR build
      // (they use browser-style imports that Node can't resolve natively)
      'lucide-react',
      'react-helmet-async',
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

// Supabase — only loaded when auth/db is needed
          if (id.includes('node_modules/@supabase')) {
            return 'vendor-supabase';
          }

          // Radix UI + shadcn utilities — large UI primitives
          if (
            id.includes('node_modules/@radix-ui') ||
            id.includes('node_modules/class-variance-authority')
          ) return 'vendor-ui';

          // Guide data — large dataset, split into its own cacheable chunk
          if (id.includes('src/data/guides') && !id.includes('node_modules')) {
            return 'guide-data';
          }

          // TanStack Query
          if (id.includes('node_modules/@tanstack')) {
            return 'vendor-query';
          }


        },
      },
    },
  },
}));
