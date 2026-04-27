import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
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
  },
});
