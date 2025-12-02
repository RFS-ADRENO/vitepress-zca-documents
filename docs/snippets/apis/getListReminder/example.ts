import { ThreadType } from "zca-js";

const groupId = "0000000000000000";
api.getListReminder({}, groupId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);