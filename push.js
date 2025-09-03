// const push = require('web-push');

// //  let vapIdKeys = push.generateVAPIDKeys();


// //  dont want regenerate every time this keys
// let vapIdKeys = {
//     publicKey: 'BP06FrV_yDLeCwBTnAAVhir0SW4cjqhBrQamIs0BALKli2EqyCdewg-WqnDwNTwygNqyYfNWxiZCjlN2o-mYps4',
//     privateKey: 'ZgOrGJihDB0PAWu0D5VQP6-wdhb9-RqcHoX0WrObbiQ'
// };

// push.setVapidDetails('mailto:antilinstanish@gmail.com', vapIdKeys.publicKey, vapIdKeys.privateKey);

// let subscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/dGfZ1aXS1nc:APA91bHyB3btcB4O0qqSGywdYGT08_yKzQewnsK7hH6e4Ewx1aaINwhnCbO2p07iFExmlULvs3ec0WWztmTqzWXFAJdCSw34DAx0phoF7L07p1GbNeo3jAxHbSfftiS7zLytJFg0Vrb7", "expirationTime": null, "keys": { "p256dh": "BDSEI0xU2Vj_oxJKlM9oU1zL6ySHA-DTUfcHkbn0krl65_OSUMqHiT7oQiLG4z3JNTt8AM51T7Ng_wJroFzzzD0", "auth": "KYbVEn_3y8KAvTrt222W4g" } };
// push.sendNotification(subscription, 'test message');

// console.log(vapIdKeys);

const webPush = require('web-push');

let vapIdKeys = {
    publicKey: 'BP06FrV_yDLeCwBTnAAVhir0SW4cjqhBrQamIs0BALKli2EqyCdewg-WqnDwNTwygNqyYfNWxiZCjlN2o-mYps4',
    privateKey: 'ZgOrGJihDB0PAWu0D5VQP6-wdhb9-RqcHoX0WrObbiQ'
};

webPush.setVapidDetails('mailto:antilinstanish@gmail.com',
    vapIdKeys.publicKey,
    vapIdKeys.privateKey
);

// subscription should come from client!
const subscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/dGfZ1aXS1nc:APA91bHyB3btcB4O0qqSGywdYGT08_yKzQewnsK7hH6e4Ewx1aaINwhnCbO2p07iFExmlULvs3ec0WWztmTqzWXFAJdCSw34DAx0phoF7L07p1GbNeo3jAxHbSfftiS7zLytJFg0Vrb7", "expirationTime": null, "keys": { "p256dh": "BDSEI0xU2Vj_oxJKlM9oU1zL6ySHA-DTUfcHkbn0krl65_OSUMqHiT7oQiLG4z3JNTt8AM51T7Ng_wJroFzzzD0", "auth": "KYbVEn_3y8KAvTrt222W4g" } }
const payload = JSON.stringify({
    title: "Stanish is waiting",
    body: "Get 50% off all items.",
    icon: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
    url: "https://getzenbasket.com"
});
// const subscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/dGfZ1aXS1nc:APA91bHyB3btcB4O0qqSGywdYGT08_yKzQewnsK7hH6e4Ewx1aaINwhnCbO2p07iFExmlULvs3ec0WWztmTqzWXFAJdCSw34DAx0phoF7L07p1GbNeo3jAxHbSfftiS7zLytJFg0Vrb7", "expirationTime": null, "keys": { "p256dh": "BDSEI0xU2Vj_oxJKlM9oU1zL6ySHA-DTUfcHkbn0krl65_OSUMqHiT7oQiLG4z3JNTt8AM51T7Ng_wJroFzzzD0", "auth": "KYbVEn_3y8KAvTrt222W4g" } }
webPush.sendNotification(subscription, payload)
    .then(response => console.log("✅ Notification sent!", response))
    .catch(error => console.error("❌ Push error:", error));
