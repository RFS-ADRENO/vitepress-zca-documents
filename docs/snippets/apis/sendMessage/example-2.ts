import { ThreadType, Urgency, TextStyle } from "zca-js";

const text = "TIN QUAN TRỌNG!!!";

api
    .sendMessage(
        {
            msg: text,
            urgency: Urgency.Important,
            styles: [
                {
                    start: 0,
                    len: text.length,
                    st: TextStyle.Bold // in đậm
                },
                {
                    start: 0,
                    len: text.length,
                    st: TextStyle.Red // màu đỏ
                },
                {
                    start: 0,
                    len: text.length,
                    st: TextStyle.Big // cỡ chữ lớn
                }
            ]
        },
        "0000000000000000",
        ThreadType.Group
    )
    .then(console.log)
    .catch(console.error);