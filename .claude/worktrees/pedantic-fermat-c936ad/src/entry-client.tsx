import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppShell } from "./App";
import "./index.css";

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

// Register service worker for offline support and caching
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
