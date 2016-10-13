var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'index.html',
  'EnglishWebContent//2015/01/02/internet.html',
  'https://codehubplatform.github.io/EnglishWebContent//2015/01/02/internet.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        console.log('resoincesis');
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});