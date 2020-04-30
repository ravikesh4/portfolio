const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/css/uikit.min.css",
  "/js/uikit-icons.min.js",
  "/js/uikit.min.js",
  "/images/logo.png",
  "/images/ravikesh.png",
  "/images/header.jpg",
  "/images/netzary.png",
  "/images/hurreh_logo.png",
  "/images/evineon_logo.png"
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })