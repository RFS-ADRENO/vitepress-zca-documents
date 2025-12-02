import { ThreadType, MuteDuration, MuteAction } from "zca-js";

const threadIds = "000000000000000001";

api
    .setMute(
        {
            duration: MuteDuration.FOUR_HOURS,
            action: MuteAction.MUTE
        },
        threadIds,
        ThreadType.Group
    )
    .then(console.log)
    .catch(console.error);