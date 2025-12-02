import { ThreadType } from "zca-js";

const reminderId = "reminderId1";
const groupId = "0000000000000000000";

api.removeReminder(reminderId, groupId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);