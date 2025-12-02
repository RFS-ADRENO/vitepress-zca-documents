import { AutoReplyScope } from "zca-js":

const startTime = new Date();
const endTime = new Date();

// 18 giờ hôm nay
startTime.setHours(18, 0, 0, 0);

// 7 giờ 30 hôm sau
endTime.setDate(endTime.getDate() + 1);
endTime.setHours(7, 30, 0, 0);

api.updateAutoReply({
    id: 1,
    content: "Nội dung mới",
    isEnable: true,
    startTime: startTime,
    endTime: endTime,
    scope: AutoReplyScope.Stranger,
})
    .then(console.log)
    .catch(console.error);