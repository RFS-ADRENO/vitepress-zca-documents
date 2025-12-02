const groupId = "000000000000000";

api
    .reviewPendingMemberRequest(
        {
            members: ["000000000000001", "000000000000002"],
            isApprove: true,
        },
        groupId
    )
    .then(console.log).catch(console.error);