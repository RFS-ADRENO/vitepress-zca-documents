import fs from "fs";
import path from "path";

export function loadDir(dir: string, lang: string = "vi") {
    const APIS_DIR = path.resolve(process.cwd(), "docs", "pages", lang, dir);
    const apiFiles = fs.readdirSync(APIS_DIR).filter((file) => file.endsWith(".md"));
    return apiFiles.map((file) => {
        const apiName = path.basename(file, ".md");
        const targetPath = `/${file}`;

        return { text: apiName, link: targetPath };
    });
}
