import { ThreadType } from "zca-js";

const threadId = "0000000000000000000";
const loggedInId = api.getOwnId();
const phoneNumber = "0900000000";

api.sendCard(
    {
        userId: loggedInId,
        phoneNumber: phoneNumber,
    },
    threadId,
    ThreadType.Group
)
    .then(console.log)
    .catch(console.error);