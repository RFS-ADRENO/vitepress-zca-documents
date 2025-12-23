import { defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { loadDir } from "./utils";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    rewrites: {
        "pages/:rest*": ":rest*",
    },
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin);
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
    title: "zca-js",
    description: "An unofficial Zalo API for JavaScript",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        socialLinks: [{ icon: "github", link: "https://github.com/RFS-ADRENO/zca-js" }],
        logo: "/logo.svg",
    },
    locales: {
        vi: {
            label: "Tiếng Việt",
            lang: "vi",
            themeConfig: {
                nav: [
                    { text: "Trang chủ", link: "/vi/" },
                    { text: "Bắt đầu", link: "/vi/get-started/introduction" },
                ],

                sidebar: [
                    {
                        text: "✨ BẮT ĐẦU",
                        items: [
                            { text: "Giới thiệu", link: "/introduction" },
                            { text: "Nâng cấp lên v2", link: "/upgrade-to-v2" },
                            {
                                text: "Ví dụ",
                                items: [
                                    { text: "Echo bot", link: "/echo-bot" },
                                    {
                                        text: "Welcome bot",
                                        link: "/welcome-bot",
                                    },
                                ],
                                base: "/vi/get-started/examples/",
                            },
                        ],
                        base: "/vi/get-started/",
                    },
                    {
                        text: "🔑 ĐĂNG NHẬP",
                        items: [
                            {
                                text: "Đăng nhập với Cookie",
                                link: "/login-with-cookie",
                            },
                            {
                                text: "Đăng nhập với QRCode",
                                link: "/login-with-qrcode",
                            },
                            {
                                text: "Đăng nhập nhiều tài khoản",
                                link: "/multi-account-login",
                            },
                            {
                                text: "Sử dụng Proxy",
                                link: "/using-proxy",
                            },
                        ],
                        base: "/vi/auth/",
                    },
                    {
                        text: "🛠️ API",
                        items: loadDir("apis", "vi"),
                        base: "/vi/apis/",
                    },
                    {
                        text: "📡 LISTENER",
                        items: [
                            { text: "message", link: "/message" },
                            { text: "reaction", link: "/reaction" },
                            { text: "undo", link: "/undo" },
                            { text: "group_event", link: "/group_event" },
                        ],
                        base: "/vi/listeners/",
                    },
                    {
                        text: "🧩 MODELS",
                        items: loadDir("models", "vi"),
                        base: "/vi/models/",
                    },
                ],
            },
        },
        en: {
            label: "English",
            lang: "en",
            themeConfig: {
                nav: [
                    { text: "Home", link: "/en/" },
                    { text: "Get Started", link: "/en/get-started/introduction" },
                ],

                sidebar: [
                    {
                        text: "✨ GET STARTED",
                        items: [
                            { text: "Introduction", link: "/introduction" },
                            { text: "Upgrade to v2", link: "/upgrade-to-v2" },
                            {
                                text: "Examples",
                                items: [
                                    { text: "Echo bot", link: "/echo-bot" },
                                    {
                                        text: "Welcome bot",
                                        link: "/welcome-bot",
                                    },
                                ],
                                base: "/en/get-started/examples/",
                            },
                        ],
                        base: "/en/get-started/",
                    },
                    {
                        text: "🔑 LOGIN",
                        items: [
                            {
                                text: "Login with Cookie",
                                link: "/login-with-cookie",
                            },
                            {
                                text: "Login with QRCode",
                                link: "/login-with-qrcode",
                            },
                            {
                                text: "Login with Multiple Accounts",
                                link: "/multi-account-login",
                            },
                            {
                                text: "Using Proxy",
                                link: "/using-proxy",
                            },
                        ],
                        base: "/en/auth/",
                    },
                    {
                        text: "🛠️ API",
                        items: loadDir("apis", "en"),
                        base: "/en/apis/",
                    },
                    {
                        text: "📡 LISTENER",
                        items: [
                            { text: "message", link: "/message" },
                            { text: "reaction", link: "/reaction" },
                            { text: "undo", link: "/undo" },
                            { text: "group_event", link: "/group_event" },
                        ],
                        base: "/en/listeners/",
                    },
                    {
                        text: "🧩 MODELS",
                        items: loadDir("models", "en"),
                        base: "/en/models/",
                    },
                ],
            },
        },
    },
});
