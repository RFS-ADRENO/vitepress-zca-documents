const memberId = "000000000000000000";
const groupId = "000000000000000001";

api.removeGroupBlockedMember(memberId, groupId)
    .then(console.log)
    .catch(console.error);