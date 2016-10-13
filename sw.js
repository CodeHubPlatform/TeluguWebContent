importScripts('https://codehubplatform.github.io/EnglishWebContent/cache-polyfill.js');
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/EnglishWebContent/css/main.css',
  '/EnglishWebContent/javascript/marksheet.js',
  'index.html',
  '/EnglishWebContent//2015/01/01/introduction.html',
  '/EnglishWebContent//2015/01/02/internet.html',
  '/EnglishWebContent//2015/01/04/browser.html'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    console.log('[*] Serving cached: ' + event.request.url);
                    return response;
                }

                console.log('[*] Fetching: ' + event.request.url);
                return fetch(event.request);
            }
        )
    );
});