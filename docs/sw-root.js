const CACHE_NAME = 'ROOT_CACHE';

async function cacheAllThings() {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
        './index.html',
        './app.js',
        './app.css',
        './app.js',
    ]);
}

self.addEventListener('install', async (event) => {
    console.log('ROOT DONE', event);
    event.waitUntil(cacheAllThings());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                console.log('sw-root fetch interception');
                return response;
            })
    )
});