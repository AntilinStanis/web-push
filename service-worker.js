self.addEventListener('push', function (event) {
    const data = event.data.json();
    var options = {
        body: data.body,
        icon: data.icon,
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: 'images/xmark.png'
            }
        ]
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});