const push = require('web-push');

//  let vapIdKeys = push.generateVAPIDKeys();


//  dont want regenerate every time this keys
let vapIdKeys = {
    publicKey: 'BP06FrV_yDLeCwBTnAAVhir0SW4cjqhBrQamIs0BALKli2EqyCdewg-WqnDwNTwygNqyYfNWxiZCjlN2o-mYps4',
    privateKey: 'ZgOrGJihDB0PAWu0D5VQP6-wdhb9-RqcHoX0WrObbiQ'
};

push.setVapidDetails('mailto:antilinstanish@gmail.com', vapIdKeys.publicKey, vapIdKeys.privateKey);

let subscription = {};
push.sendNotification(subscription, 'test message');

console.log(vapIdKeys);