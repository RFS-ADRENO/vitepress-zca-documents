import { Zalo } from "zca-js";
import fs from "fs";

const zalo = new Zalo(
    {
        selfListen: false,
        checkUpdate: true,
    },
);

const api = await zalo.login(
    {
        cookie: JSON.parse(fs.readFileSync("./cookies.json", "utf-8")),
        imei: "your_imei_here",
        userAgent: "your_user_agent_here",
    }
);
