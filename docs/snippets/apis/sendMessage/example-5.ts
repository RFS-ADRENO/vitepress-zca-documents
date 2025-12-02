import path from "path";

// gửi file chỉ định vào nhóm mỗi khi có ai nhắn "file"
api.listener.on("message", (message) => {
    const isPlainText = typeof message.data.content == "string";
    if (isPlainText && message.data.content == "file") {
        api
            .sendMessage(
                {
                    msg: "",
                    attachments: [path.resolve("./file.txt")]
                },
                message.threadId,
                message.type
            )
            .then(console.log)
            .catch(console.error);
    }
});