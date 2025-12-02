import { ThreadType } from "zca-js";

const threadIds = ["000000000000000000", "000000000000000001"];

api.setHiddenConversations(true, threadIds, ThreadType.Group)
    .then(console.log)
    .catch(console.error);