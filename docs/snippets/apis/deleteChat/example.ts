import { ThreadType } from "zca-js";

const threadId = "00000000000000";

api
    .deleteChat(
        {
            ownerId: "00000000000000",
            cliMsgId: "00000000000000",
            globalMsgId: "00000000000000"
        },
        threadId,
        ThreadType.Group
    )
    .then(console.log).catch(console.error);