import { UpdateSettingsType } from "zca-js";

api
    .updateSettings(UpdateSettingsType.AcceptCall, 2)
    .then(console.log)
    .catch(console.error);