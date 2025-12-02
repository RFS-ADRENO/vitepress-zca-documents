api
    .forwardMessage(
        {
            message: "tin nhắn chuyển tiếp"
        },
        [
            "0000000000000000001",
            "0000000000000000002"
            "0000000000000000003"
        ]
    )
    .then(console.log)
    .catch(console.error);