import { ThreadType } from "zca-js";

const threadId = "0000000000000000";

api.removeUnreadMark(threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);