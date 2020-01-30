self.addEventListener('install', (event) => {
    console.log('TWO DONE', event);
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                console.log('sw-two fetch interception');
                return response;
            })
    )
});