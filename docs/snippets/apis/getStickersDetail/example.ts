// lấy thông tin của 5 sticker đầu tiên tìm thấy với từ khóa
    
try {
    const keyword = "xin chào";
    const stickerIds = await api.getStickers(keyword);
    const stickersDetail = await api.getStickersDetail(stickerIds.slice(0, 5));
    
    console.log(stickersDetail);
} catch(e) {
    console.error(e);
}