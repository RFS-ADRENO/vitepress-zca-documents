import { Zalo } from "zca-js";

const zalo = new Zalo({
    selfListen: false,
});
const api = await zalo.loginQR();

const { listener } = api;

listener.on("message", (msg) => {
    if (typeof msg.data.content == "string") {
        api
            .sendMessage(msg.data.content, msg.threadId, msg.type)
            .catch(console.error);
    }
});

listener.start();
