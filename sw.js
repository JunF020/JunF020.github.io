/**
 * Corban Construction Ltd - Service Worker
 * Production-ready version
 */

const CACHE_VERSION = "v1";
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// Only local assets here — never CDN files
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
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }),
  );
  self.skipWaiting();
});

/* ======================
   ACTIVATE
====================== */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (![STATIC_CACHE, RUNTIME_CACHE].includes(key)) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

/* ======================
   FETCH
====================== */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);

  // HTML: network-first (fresh content)
  if (event.request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, copy);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            return cached || caches.match("/404.html");
          });
        }),
    );
    return;
  }

  // Static assets: cache-first
  if (
    requestUrl.origin === self.location.origin &&
    (requestUrl.pathname.endsWith(".css") ||
      requestUrl.pathname.endsWith(".js") ||
      requestUrl.pathname.endsWith(".png") ||
      requestUrl.pathname.endsWith(".jpg") ||
      requestUrl.pathname.endsWith(".jpeg") ||
      requestUrl.pathname.endsWith(".svg") ||
      requestUrl.pathname.endsWith(".webp"))
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return (
          cached ||
          fetch(event.request).then((response) => {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, copy);
            });
            return response;
          })
        );
      }),
    );
    return;
  }

  // Everything else: just go to network
});

/* ======================
   OPTIONAL: SYNC
====================== */
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form") {
    event.waitUntil(Promise.resolve());
  }
});

/* ======================
   OPTIONAL: PUSH
====================== */
self.addEventListener("push", (event) => {
  if (!event.data) return;

  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || "Notification", {
      body: data.body || "",
      icon: "/images/logo.png",
    }),
  );
});
