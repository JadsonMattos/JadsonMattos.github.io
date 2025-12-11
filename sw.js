// Service Worker para PWA - Modo Offline
const CACHE_NAME = 'portfolio-v1.0.1';
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
    const request = event.request;
    
    // Ignorar requisições que não sejam HTTP/HTTPS (extensões do navegador, chrome-extension://, etc)
    const urlString = request.url;
    if (!urlString || (!urlString.startsWith('http://') && !urlString.startsWith('https://'))) {
        return; // Ignora chrome-extension://, data:, blob:, etc
    }
    
    // Ignorar requisições de extensões e outros esquemas não suportados
    try {
        const url = new URL(urlString);
        // Verificar se é chrome-extension, moz-extension, etc
        if (url.protocol === 'chrome-extension:' || 
            url.protocol === 'moz-extension:' || 
            url.protocol === 'safari-extension:' ||
            url.protocol !== 'http:' && url.protocol !== 'https:') {
            return;
        }
        
        // Só processar requisições do mesmo origin ou de CDNs confiáveis
        if (url.origin !== self.location.origin && 
            !url.hostname.includes('cdn.jsdelivr.net') && 
            !url.hostname.includes('cdnjs.cloudflare.com') &&
            !url.hostname.includes('fonts.googleapis.com') &&
            !url.hostname.includes('fonts.gstatic.com') &&
            !url.hostname.includes('assets.calendly.com')) {
            return;
        }
    } catch (e) {
        // URL inválida, ignorar
        return;
    }
    
    event.respondWith(
        fetch(event.request)
            .then(function(response) {
                // Se a requisição funcionar, armazena no cache
                if (response && response.status === 200 && response.type === 'basic') {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, responseClone).catch(function(err) {
                            // Ignorar erros de cache (ex: requisições não cacheáveis)
                            console.log('Cache put failed (ignored):', err);
                        });
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


