const phoneNumber = "0999999999";
const userInfo = await api.findUser(phoneNumber);

const userId = userInfo.uid;
const msg = "Xin chào, hãy kết bạn với tôi!";

api.sendFriendRequest(msg, userId)
    .then(console.log)
    .catch(console.error);