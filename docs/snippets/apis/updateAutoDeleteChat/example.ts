import { ChatTTL } from "zca-js":

api.updateAutoDeleteChat(ChatTTL.ONE_DAY, "000000000000000000")
    .then(console.log).catch(console.error);