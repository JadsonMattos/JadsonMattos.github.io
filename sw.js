// Service Worker para PWA - Modo Offline
const CACHE_NAME = 'portfolio-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/main.css',
    '/assets/css/card.css',
    '/assets/css/progress.css',
    '/assets/css/semi-transparent-buttons.css',
    '/assets/css/hint.base.min.css',
    '/assets/js/main.js',
    '/assets/js/projects.js',
    '/assets/js/i18n.js',
    '/assets/js/particles-config.js',
    '/assets/images/android512.png',
    '/assets/images/favicon.ico'
];

// Install - Cache dos assets
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Activate - Limpar caches antigos
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Fetch - Estratégia: Network First, fallback para Cache
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
            .then(function(response) {
                // Se a requisição funcionar, armazena no cache
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(function() {
                // Se falhar, tenta buscar do cache
                return caches.match(event.request).then(function(response) {
                    return response || caches.match('/index.html');
                });
            })
    );
});


