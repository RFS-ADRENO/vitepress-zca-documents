import { ThreadType } from "zca-js";

const groupId = "0000000000000000000";
const topicId = "";
const newTitle = "Tiêu đề mới"

api
    .editReminder(
        {
            topicId: topicId,
            title: newTitle,
        },
        groupId,
        ThreadType.Group
    )
    .then(console.log)
    .catch(console.error);