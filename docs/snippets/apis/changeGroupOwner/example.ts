const memberId = "0000000000000000001";
const groupId = "0000000000000000000";

api
    .changeGroupOwner(memberId, groupId)
    .then(console.log).catch(console.error);