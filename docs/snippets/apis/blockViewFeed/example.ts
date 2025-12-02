const userId = "0000000000000000001";
api
    .blockViewFeed(userId)
    .then(console.log).catch(console.error);