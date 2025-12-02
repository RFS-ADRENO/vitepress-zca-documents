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

const threadId = "000000000000000"

api.sendSeenEvent(messages, threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);