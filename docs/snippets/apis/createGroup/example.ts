// Tạo nhóm mới cùng 2 người dùng khác
api.createGroup({
    members: ["0000000000000000002", "0000000000000000003"],
    name: "Nhóm Mới",
    avatarSource: "./avatar.jpg", // hoặc dùng buffer
})
    .then(console.log)
    .catch(console.error);