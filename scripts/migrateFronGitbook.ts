import fs from "fs";
import path from "path";

const APIS_DIRS = [
    {
        sourcePath: path.resolve(process.cwd(), "scripts", "apiList.json"),
        saveDir: "apis",
    },
    {
        sourcePath: path.resolve(process.cwd(), "scripts", "modelList.json"),
        saveDir: "models",
    },
];

async function fetchData(url: string) {
    return fetch(url).then((res) => res.text());
}

function getAPIList(sourcePath: string) {
    return JSON.parse(fs.readFileSync(sourcePath, "utf-8")) as string[];
}

function getRawMarkdownApiURL(dir: string, name: string) {
    return `https://tdung.gitbook.io/zca-js/${dir}/${name.toLowerCase()}.md`;
}

async function saveNewData(dir: string, sources: { name: string; url: string }[]) {
    for (const source of sources) {
        const filePath = path.resolve(
            process.cwd(),
            "docs",
            "pages",
            "vi",
            dir,
            `${source.name}.md`
        );

        if (fs.existsSync(filePath)) {
            console.log(`File ${filePath} already exists. Skipping...`);
            continue;
        }

        const data = await fetchData(source.url);
        fs.writeFileSync(filePath, data, "utf-8");
        console.log(`Saved ${source.name} to ${filePath}`);
    }
}

for (const dirInfo of APIS_DIRS) {
    const apiList = getAPIList(dirInfo.sourcePath).map((e) => ({
        name: e,
        url: getRawMarkdownApiURL(dirInfo.saveDir, e),
    }));

    saveNewData(dirInfo.saveDir, apiList).catch((err) => console.error("Error saving data:", err));
}
