console.log(caches.keys());
let staticCacheName = "ravikesh-cache";
let filesToCache = [
    '/index.html/',
    '/images/ravikesh.png',
    '/images/ravikesh.png',
    '/images/ravikesh.png',
    "/css/uikit.min.css",
    "/js/uikit.min.js",
    "/js/uikit-icons.min.js",
    
];

// Cache on install
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName === "ravikesh-cache"))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {


    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('/index.html/');
            })
    );
});
