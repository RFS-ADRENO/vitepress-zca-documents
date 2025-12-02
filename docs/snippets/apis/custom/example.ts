import type { API } from "zca-js";

type GetUserAvatarResponse = string;
type GetUserAvatarProps = {
    uid: string;
};

api.custom<GetUserAvatarResponse, GetUserAvatarProps>("getUserAvatar", async ({ ctx, props, utils }) => {
    const { uid } = props;
    const userInfo = await api.getUserInfo(uid);
    return userInfo.changed_profiles[uid].avatar;
});

type CustomAPI = API & {
    getUserAvatar: (props: GetUserAvatarProps) => Promise<GetUserAvatarResponse>;
};

(api as CustomAPI).getUserAvatar({ uid: "000000000000000000" }).then(console.log);