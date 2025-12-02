import { ThreadType, DestType } from "zca-js";

api.sendTypingEvent(threadId, ThreadType.User, DestType.User)
    .then(console.log)
    .catch(console.error);