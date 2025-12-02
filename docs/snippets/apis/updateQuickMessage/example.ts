import { Gender, BusinessCategory } from "zca-js";

const itemId = 1;

api
    .updateQuickMessage(
        {
            keyword: "hi",
            title: "Xin chào",
            media: ["./hello.jpg"]
        },
        itemId
    )
    .then(console.log)
    .catch(console.error);