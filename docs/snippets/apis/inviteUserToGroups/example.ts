const userId = "0000000000000000001";
const groupId = "0000000000000000002";
api.inviteUserToGroups(userId, groupId)
    .then(console.log)
    .catch(console.error);