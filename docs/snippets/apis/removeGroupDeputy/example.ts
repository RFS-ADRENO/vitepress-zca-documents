const groupId = "0000000000000000000";
const memberId = "0000000000000000001";

api.removeGroupDeputy(memberId, groupId)
    .then(console.log)
    .catch(console.error);