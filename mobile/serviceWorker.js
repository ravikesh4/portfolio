const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/images/header/1.jpg",
  "/images/header/2.jpg",
  "/images/header/3.jpg",
  "/images/projects/admin.png",
  "/images/projects/ecommerce.png",
  "/images/projects/instagram.png",
  "/images/projects/mobile.png",
  "/images/ravi.png",
  "/images/ravikesh.jpg"
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