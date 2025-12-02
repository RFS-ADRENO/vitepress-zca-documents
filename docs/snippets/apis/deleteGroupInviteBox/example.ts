const groupId = "00000000000000";

api
    .deleteGroupInviteBox(groupId, true)
    .then(console.log).catch(console.error);