try {
    const keyword = "xin chào";
    const stickerIds = await api.getStickers(keyword);
    
    console.log(stickerIds);
} catch(e) {
    console.error(e);
}