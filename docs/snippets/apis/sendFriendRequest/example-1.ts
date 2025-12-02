const userId = "000000000000000001";
const msg = "Xin chào, hãy kết bạn với tôi!";

api.sendFriendRequest(msg, userId)
    .then(console.log)
    .catch(console.error);