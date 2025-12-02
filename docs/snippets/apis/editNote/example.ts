const groupId = "0000000000000000000";
const topicId = "";
const newTitle = "Tiêu đề mới"

api
    .editNote(
        {
            topicId: topicId,
            title: newTitle,
            pinAct: true
        },
        groupId
    )
    .then(console.log)
    .catch(console.error);