self.addEventListener('push', function (event) {
    const data = event.data.json(); // parse the JSON payload sent by backend

    var options = {
        body: data.body,  // the text under the title
        icon: data.icon,   // small image shown in the notification
        vibrate: [100, 50, 100],
        // data: {
        //     dateOfArrival: Date.now(),  // your own data; kept with the notification and available on click
        //     primaryKey: '2'
        // },
        data: { url: data.url },
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

// 🔹 Handle click on the notification
self.addEventListener("notificationclick", (event) => {
    event.notification.close(); // closes the popup notification

    // Open the URL stored in notification data
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});