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
  "/images/evineon_logo.png",
  "/mobile/css/style.css",
  "/mobile/images/header/1.jpg",
  "/mobile/images/header/2.jpg",
  "/mobile/images/header/3.jpg",
  "/mobile/images/projects/admin.png",
  "/mobile/images/projects/ecommerce.png",
  "/mobile/images/projects/instagram.png",
  "/mobile/images/projects/mobile.png",
  "/mobile/images/ravi.png",
  "/mobile/images/ravikesh.jpg"
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