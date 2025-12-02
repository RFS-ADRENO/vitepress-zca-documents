const userId = "0000000000000000001";
api
    .blockUser(userId)
    .then(console.log).catch(console.error);