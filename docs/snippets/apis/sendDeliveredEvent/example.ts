import { ThreadType } from "zca-js";

const messages = [
    {
        msgId: "";
        cliMsgId: "";
        uidFrom: "";
        idTo: "";
        msgType: "";
        st: 1;
        at: 1;
        cmd: 1;
        ts: "";
    }
]

api.sendDeliveredEvent(false, messages, ThreadType.Group)
    .then(console.log)
    .catch(console.error);