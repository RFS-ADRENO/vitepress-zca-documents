const avatarList = await api.getAvatarList();
const photoId = avatarList.photos[1].photoId;

api.reuseAvatar(photoId)
    .then(console.log)
    .catch(console.error);