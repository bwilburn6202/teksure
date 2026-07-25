import { defineConfig } from "vitest/config";
import path from "path";

/**
 * Test config.
 *
 * NOTE: we deliberately do NOT use @vitejs/plugin-react-swc here. Under Vitest
 * the SWC plugin emitted calls to `jsxDEV` from react/jsx-dev-runtime that failed
 * to resolve in the jsdom environment, so every component test died with
 * "TypeError: jsxDEV is not a function". Letting esbuild handle JSX with the
 * automatic runtime avoids the mismatch — tests need no HMR or Fast Refresh,
 * which is the only reason the SWC plugin was here.
 */
export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  test: {
    environment: "jsdom",
    globals: true,
    // Pin NODE_ENV so tests never inherit a stray `production` from the shell.
    // React's CJS entry picks its production build off this at runtime, and the
    // production build throws "act(...) is not supported" for every render.
    env: { NODE_ENV: "test" },
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: [
        "src/lib/progress.ts",
        "src/lib/favorites.ts",
        "src/lib/rateLimit.ts",
        "src/data/guides.ts",
        "src/components/BackToTop.tsx",
        "src/components/ShareGuideButton.tsx",
        "src/components/ReportBrokenLink.tsx",
        "src/components/PageBreadcrumb.tsx",
        "src/components/CookieConsent.tsx",
      ],
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom"],
  },
});
