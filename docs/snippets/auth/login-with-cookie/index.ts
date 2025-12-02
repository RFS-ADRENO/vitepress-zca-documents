import { Zalo } from "zca-js";
import fs from "fs";

const zalo = new Zalo({
    selfListen: false, // mặc định false, lắng nghe sự kiện của bản thân
    checkUpdate: true, // mặc định true, kiểm tra update
    logging: true, // mặc định true, bật/tắt log mặc định của thư viện
});

// đọc cookie đã lưu ở bước 5
const cookie = JSON.parse(fs.readFileSync("./cookie.json", "utf-8"));

const api = await zalo.login({
    cookie: cookie,
    imei: "điền_vào_đây", // điền giá trị đã lấy ở bước 3
    userAgent: "điền_vào_đây", // điền giá trị đã lấy ở bước 4
});

api.listener.start(); // bắt đầu lắng nghe sự kiện
