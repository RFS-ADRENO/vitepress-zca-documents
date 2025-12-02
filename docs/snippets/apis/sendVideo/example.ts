const options = {
    msg: "Video mẫu",
    videoUrl: "https://example.com/video.mp4",
    thumbtnailUrl: "https://example.com/videoThumbnail.jpg",
    duration: 5000,
    width: 1280;
    height: 720;
};
const threadId = "000000000000000";

api.sendVideo(options, threadId, ThreadType.Group)
    .then(console.log)
    .catch(console.error);