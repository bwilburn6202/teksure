import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ── Re-apply saved accessibility profile before first paint ───────────────
// The Accessibility Profile Builder (/tools/accessibility-profile-builder)
// saves the user's preferences to localStorage under 'teksure-a11y-profile'.
// We read and apply them here so the site stays configured across reloads.
try {
  const raw = localStorage.getItem("teksure-a11y-profile");
  if (raw) {
    const p = JSON.parse(raw) as {
      fontSize?: "normal" | "large" | "x-large";
      highContrast?: boolean;
      reduceMotion?: boolean;
      largerTapTargets?: boolean;
      textToSpeech?: boolean;
      screenReaderOptimized?: boolean;
    };
    const html = document.documentElement;
    if (p.fontSize === "large") html.classList.add("font-size-large");
    else if (p.fontSize === "x-large") html.classList.add("font-size-xl");
    if (p.highContrast) html.classList.add("high-contrast");

    // Body classes (the body element always exists at this point
    // because the script tag is placed at the end of <body> by Vite).
    const body = document.body;
    if (body) {
      if (p.fontSize && p.fontSize !== "normal") body.classList.add("teksure-large-text");
      if (p.highContrast) body.classList.add("teksure-high-contrast");
      if (p.reduceMotion) body.classList.add("teksure-reduce-motion");
      if (p.largerTapTargets) body.classList.add("teksure-large-targets");
      if (p.textToSpeech) body.classList.add("teksure-tts");
      if (p.screenReaderOptimized) body.classList.add("teksure-screen-reader");
    }
  }
} catch {
  /* ignore — no saved profile or storage disabled */
}

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for offline support and caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
