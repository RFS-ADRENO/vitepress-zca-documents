import { ThreadType } from "zca-js";

const groupId = "000000000000";

api
    .uploadAttachment(
        [
            "./pic1.jpg",
            "./pic2.jpg",
        ],
        groupId,
        ThreadType.User
    )
    .then(console.log)
    .catch(console.error);