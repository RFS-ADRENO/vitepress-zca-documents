import { ThreadType } from "zca-js";

api
    .addUnreadMark("000000000000000000", ThreadType.Group)
    .then(console.log).catch(console.error);