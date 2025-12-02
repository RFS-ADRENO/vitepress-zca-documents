import { ThreadType } from "zca-js";

api
    .sendMessage(
        {
            msg: "Xin chào @ZCA",
            mentions: [
                {
                    pos: 9,
                    uid: "0000000000000000",
                    len: 4
                }
            ]
        },
        "0000000000000000",
        ThreadType.Group
    )
    .then(console.log)
    .catch(console.error);