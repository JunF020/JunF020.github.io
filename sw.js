/**
 * Corban Construction Ltd - Service Worker
 *
 * Strategy:
 *  - HTML        → network-first  (always fresh)
 *  - CSS / JS    → network-first  (changes reflect immediately without clearing cache)
 *  - Images      → cache-first    (rarely change, big performance win)
 *  - CDN assets  → cache-first    (external, versioned, safe to cache long-term)
 *
 * To bust ALL caches on a new deployment, bump CACHE_VERSION below.
 */

// ⚠️  BUMP THIS on every deployment or CSS/JS changes won't reflect for visitors
const CACHE_VERSION = "v2";
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/404.html",
];

/* ======================
   INSTALL
====================== */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  // Take over immediately without waiting for old SW to finish
  self.skipWaiting();
});

/* ======================
   ACTIVATE — wipe old caches
====================== */
self.addEventListener("activate", (event) => {
  const validCaches = [STATIC_CACHE, IMAGE_CACHE, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !validCaches.includes(key))
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  // Take control of all open tabs immediately
  self.clients.claim();
});

/* ======================
   FETCH
====================== */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (!event.request.url.startsWith("http")) return;

  const url = new URL(event.request.url);

  // ── Images: cache-first (they rarely change)
  if (
    url.pathname.match(/\.(png|jpe?g|gif|svg|webp|ico)$/i) ||
    url.pathname.startsWith("/images/")
  ) {
    event.respondWith(cacheFirst(event.request, IMAGE_CACHE));
    return;
  }

  // ── CDN assets (fonts, icons, libraries): cache-first
  if (
    url.hostname.includes("fonts.googleapis.com") ||
    url.hostname.includes("fonts.gstatic.com") ||
    url.hostname.includes("cdnjs.cloudflare.com") ||
    url.hostname.includes("cdn.jsdelivr.net")
  ) {
    event.respondWith(cacheFirst(event.request, RUNTIME_CACHE));
    return;
  }

  // ── CSS and JS: network-first so updates are instant
  if (url.pathname.match(/\.(css|js)$/i)) {
    event.respondWith(networkFirst(event.request, STATIC_CACHE));
    return;
  }

  // ── HTML pages: network-first (always serve fresh content)
  if (
    event.request.headers.get("accept")?.includes("text/html") ||
    url.pathname.endsWith(".html") ||
    url.pathname === "/"
  ) {
    event.respondWith(networkFirst(event.request, RUNTIME_CACHE));
    return;
  }
});

/* ======================
   STRATEGIES
====================== */

/**
 * Network-first: try network, fall back to cache.
 * Perfect for HTML, CSS, JS — changes show immediately.
 */
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    // Only cache valid responses
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    // Network failed — serve from cache
    const cached = await caches.match(request);
    if (cached) return cached;
    // Last resort for HTML: show 404 page
    if (request.headers.get("accept")?.includes("text/html")) {
      return caches.match("/404.html");
    }
  }
}

/**
 * Cache-first: serve from cache, fall back to network.
 * Perfect for images and CDN assets — fast and saves bandwidth.
 */
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    // Nothing we can do for images/CDN if both cache and network fail
    return new Response("Network error", { status: 408 });
  }
}
("");

/* ======================
   BACKGROUND SYNC
====================== */
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form") {
    event.waitUntil(Promise.resolve());
  }
});

/* ======================
   PUSH NOTIFICATIONS
====================== */
self.addEventListener("push", (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || "Corban Construction", {
      body: data.body || "",
      icon: "/images/logo.png",
    }),
  );
});
