/**
 * TekSure Service Worker — offline guide access.
 *
 * Strategy:
 *  - App shell (HTML, JS, CSS) → Cache-first with network fallback
 *  - Guide pages               → Network-first, fall back to cache
 *  - Images / icons            → Cache-first
 *  - API / Supabase calls      → Network only (no caching of live data)
 */

const CACHE_VERSION = 'teksure-v1';
const OFFLINE_PAGE  = '/offline.html';

/** Files to pre-cache on install (app shell) */
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-192.png',
  '/favicon-512.png',
];

/* ── Install ─────────────────────────────────────────────── */

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // Cache assets individually so a missing file doesn't block install
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch(() => {
            console.warn('[SW] Could not pre-cache:', url);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

/* ── Activate ────────────────────────────────────────────── */

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch ───────────────────────────────────────────────── */

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin Supabase / analytics requests
  if (request.method !== 'GET') return;
  if (url.hostname.includes('supabase.co')) return;
  if (url.hostname.includes('google-analytics')) return;
  if (url.hostname.includes('youtube')) return;

  // Guide pages → network-first (get fresh content, fall back to cache)
  if (url.pathname.startsWith('/guides/')) {
    event.respondWith(networkFirstWithCache(request));
    return;
  }

  // Static assets (JS, CSS, images, fonts) → cache-first
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(cacheFirstWithNetwork(request));
    return;
  }

  // Navigation requests (HTML pages) → network-first, offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      networkFirstWithCache(request).catch(() => caches.match(OFFLINE_PAGE))
    );
    return;
  }

  // Everything else → network-first
  event.respondWith(networkFirstWithCache(request));
});

/* ── Strategies ──────────────────────────────────────────── */

async function cacheFirstWithNetwork(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Resource unavailable offline.', { status: 503 });
  }
}

async function networkFirstWithCache(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw new Error('No network and no cache for: ' + request.url);
  }
}
