/**
 * Corban Construction Ltd - Service Worker
 * Version: 1.0
 * Provides offline capability and faster repeat visits
 */

const CACHE_NAME = "corban-construction-v1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/404.html",
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.error("Cache installation failed:", err);
      }),
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  // Skip cross-origin requests (except for specific CDNs)
  const url = new URL(event.request.url);
  if (
    url.origin !== self.location.origin &&
    !url.hostname.includes("cdnjs.cloudflare.com") &&
    !url.hostname.includes("fonts.googleapis.com") &&
    !url.hostname.includes("fonts.gstatic.com")
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          // Don't cache if not a valid response
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          // Clone the response
          const responseToCache = networkResponse.clone();

          // Add to cache
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // Return offline fallback for HTML requests
          if (event.request.headers.get("accept").includes("text/html")) {
            return caches.match("/404.html");
          }
        });
    }),
  );
});

// Background sync for form submissions (if supported)
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form") {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Implementation for background sync
  console.log("Background sync triggered");
}

// Push notifications (if implemented in future)
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: "/images/logo.png",
        badge: "/images/logo.png",
      }),
    );
  }
});
