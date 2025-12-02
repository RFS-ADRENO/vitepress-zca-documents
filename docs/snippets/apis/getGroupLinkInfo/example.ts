const inviteLink = "https://zalo.me/g/*******";
api.getGroupLinkInfo({ link: inviteLink })
    .then(console.log)
    .catch(console.error);