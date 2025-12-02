// phản hồi kèm trích dẫn lại mọi tin nhắn của người khác
api.listener.on("message", (message) => {
    if (!message.isSelf) {
        api
            .sendMessage(
                {
                    msg: "ok",
                    quote: message
                },
                message.threadId,
                message.type
            )
            .then(console.log)
            .catch(console.error);
    }
});