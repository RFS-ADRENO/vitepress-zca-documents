import type { CreatePollOptions } from "zca-js";

const groupId = "0000000000000000000";
const options: CreatePollOptions = {
    question: "Cuộc bình chọn mới!",
    options: [
        "Lựa chọn 1",
        "Lựa chọn 2",
        "Lựa chọn 3"
    ]
}

api.createPoll(options, groupId)
    .then(console.log)
    .catch(console.error);