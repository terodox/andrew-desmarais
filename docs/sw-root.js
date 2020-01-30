self.addEventListener('install', (event) => {
    console.log('ROOT DONE', event);
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