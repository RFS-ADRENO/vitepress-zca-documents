import { GroupEventType, ThreadType, Zalo } from "zca-js";
import path from "path";

import { imageMetadataGetter } from "./utils";

const zalo = new Zalo({ imageMetadataGetter });
const api = await zalo.loginQR();

const { listener } = api;

listener.on("group_event", (event) => {
    if (event.type == GroupEventType.JOIN && !event.isSelf) {
        const { updateMembers } = event.data;
        if (updateMembers.length == 1) {
            api.sendMessage(
                {
                    msg: `Chào mừng @${updateMembers[0].dName} đến với nhóm!`,
                    mentions: [
                        {
                            pos: 10,
                            uid: updateMembers[0].id,
                            len: updateMembers[0].dName.length + 1, // +1 vì có dấu @ ở đầu
                        },
                    ],
                    attachments: [path.resolve("./welcome.jpg")],
                },

                event.threadId,
                ThreadType.Group
            ).catch(console.error);
        } else {
            api.sendMessage(
                {
                    msg: "Chào mừng các bạn mới đến với nhóm!",
                    attachments: [path.resolve("./welcome.jpg")],
                },
                event.threadId,
                ThreadType.Group
            ).catch(console.error);
        }
    }
});

listener.start();
