const memberUids = ["000000000000001", "000000000000002"];
api.getGroupMembersInfo(memberUids)
    .then(console.log)
    .catch(console.error);