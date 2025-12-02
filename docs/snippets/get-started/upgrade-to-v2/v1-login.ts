import { Zalo } from "zca-js";
import fs from "fs";

const zalo = new Zalo(
    {
        cookie: JSON.parse(fs.readFileSync("./cookies.json", "utf-8")),
        imei: "your_imei_here",
        userAgent: "your_user_agent_here",
    },
    {
        selfListen: false,
        checkUpdate: true,
    },
);

const api = await zalo.login();
