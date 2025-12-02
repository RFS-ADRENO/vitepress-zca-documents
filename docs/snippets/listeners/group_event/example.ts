import { GroupEventType } from "zca-js";

api.listener.on("group_event", (data) => {
    if (data.type == GroupEventType.JOIN_REQUEST) {
        // sự kiện yêu cầu tham gia
    } else {
        // các sự kiện khác
    }
});

api.listener.start();
