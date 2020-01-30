self.addEventListener('install', (event) => {
    console.log('ONE DONE', event);
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                console.log('sw-one fetch interception');
                return response;
            })
    )
});