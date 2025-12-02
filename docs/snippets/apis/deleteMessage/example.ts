// xóa tin nhắn của bản thân sau 5s nếu nội dung là "test"
api.listener.on("message", (message) => {
    const { content } = message.data;
    const isTextMessage = typeof content == "string";
    const shouldDelete = isTextMessage && content == "test";

    if (message.isSelf && shouldDelete) {
        setTimeout(() => {
            api.deleteMessage(
                {
                    data: {
                        cliMsgId: message.data.cliMsgId,
                        msgId: message.data.msgId,
                        uidFrom: message.data.uidFrom,
                    },
                    threadId: message.threadId,
                    type: message.type
                }
            )
                .then(console.log)
                .catch(console.error);
        }, 5_000);
    }
});