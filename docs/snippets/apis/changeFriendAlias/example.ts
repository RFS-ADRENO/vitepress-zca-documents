const alias = "Tên gợi nhớ";
const friendId = "0000000000000000001";

api
    .changeFriendAlias(alias, friendId)
    .then(console.log).catch(console.error);