import { ThreadType } from "zca-js"

// tìm sticker "hello", lấy và gửi sticker đầu tiên tìm thấy
api.getStickers("hello")
    .then(async (stickerIds) => {
        const stickersDetail = await api.getStickersDetail(stickerIds[0]);
        api.sendSticker(stickersDetail[0], "0000000000000001", ThreadType.User)
            .then(console.log)
            .catch(console.error);
    })
    .catch(console.error);