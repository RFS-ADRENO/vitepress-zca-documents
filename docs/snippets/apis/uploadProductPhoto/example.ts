import { ThreadType } from "zca-js";

const groupId = "000000000000";

api
    .uploadProductPhoto("./product1.jpg")
    .then(console.log)
    .catch(console.error);