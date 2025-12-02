const groupId = "0000000000000000000";

api.createNote(
    {
        title: "ghi chú mới",
        pinAct: true
    },
    groupId,
)
    .then(console.log)
    .catch(console.error);