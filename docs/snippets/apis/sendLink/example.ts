const options = {
    link: "https://example.com",
};

const threadId = "0000000000000000"

api.sendLink(
    options,
    threadId,
    ThreadType.Group
)
    .then(console.log)
    .catch(console.error);