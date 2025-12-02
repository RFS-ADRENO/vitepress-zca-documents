import fs from "fs";
import path from "path";

const SAVE_PATH = path.join(process.cwd(), "docs", "snippets", "apis");
const MARKDOWN_PATH = path.join(process.cwd(), "docs", "pages", "vi", "apis");

// code block regex for types and examples (TypeScript and JavaScript)
// Matches header followed by optional text (but stops at next ### header) then code block
const CODE_BLOCK_REGEXES = {
    types: /### Types\s+((?:(?!###)[\s\S])*?)```(ts|typescript)\s+([\s\S]*?)\s+```/g,
    examples: /### Examples\s+((?:(?!###)[\s\S])*?)```(ts|typescript|js|javascript)\s+([\s\S]*?)\s+```/g,
}

function ensurePathExists(filePath: string) {
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
    }
}

function readMarkdownFiles(dir: string) {
    const files = fs
        .readdirSync(dir, { withFileTypes: true })
        .map((each) => {
            if (each.isFile() && each.name.endsWith(".md")) {
                const apiName = path.basename(each.name, ".md");
                const content = fs.readFileSync(path.join(dir, each.name), "utf-8");

                return { name: apiName, content };
            }

            return null;
        })
        .filter(Boolean) as { name: string; content: string }[];
    return files;
}

function extractCodeSnippets(markdown: string, apiName: string) {
    const types: string[] = [];
    const examples: string[] = [];
    let modifiedMarkdown = markdown;

    // Extract all types sections
    const typesMatch = /### Types\s+((?:(?!###)[\s\S])*)/g.exec(markdown);
    if (typesMatch) {
        const typesSection = typesMatch[0];
        const typeCodeRegex = /```(ts|typescript)\s+([\s\S]*?)\s+```/g;
        let typeMatch: RegExpExecArray | null;
        let typeIndex = 0;
        let modifiedTypesSection = typesSection;
        
        while ((typeMatch = typeCodeRegex.exec(typesSection)) !== null) {
            types.push(typeMatch[2].trim());
            typeIndex++;
            
            const snippetPath = typeIndex === 1
                ? `@/snippets/apis/${apiName}/types.ts`
                : `@/snippets/apis/${apiName}/types-${typeIndex}.ts`;
            
            const replacement = `<<< ${snippetPath}`;
            modifiedTypesSection = modifiedTypesSection.replace(typeMatch[0], replacement);
        }
        
        modifiedMarkdown = modifiedMarkdown.replace(typesSection, modifiedTypesSection);
    }

    // Extract all examples sections
    const examplesMatch = /### Examples\s+((?:(?!###)[\s\S])*)/g.exec(markdown);
    if (examplesMatch) {
        const examplesSection = examplesMatch[0];
        const exampleCodeRegex = /```(ts|typescript|js|javascript)\s+([\s\S]*?)\s+```/g;
        let exampleMatch: RegExpExecArray | null;
        let exampleIndex = 0;
        let modifiedExamplesSection = examplesSection;
        
        while ((exampleMatch = exampleCodeRegex.exec(examplesSection)) !== null) {
            examples.push(exampleMatch[2].trim());
            exampleIndex++;
        }
        
        // Replace code blocks with snippet references
        exampleCodeRegex.lastIndex = 0;
        exampleIndex = 0;
        while ((exampleMatch = exampleCodeRegex.exec(examplesSection)) !== null) {
            exampleIndex++;
            
            const snippetPath = examples.length === 1
                ? `@/snippets/apis/${apiName}/example.ts`
                : `@/snippets/apis/${apiName}/example-${exampleIndex}.ts`;
            
            const replacement = `<<< ${snippetPath}`;
            modifiedExamplesSection = modifiedExamplesSection.replace(exampleMatch[0], replacement);
        }
        
        modifiedMarkdown = modifiedMarkdown.replace(examplesSection, modifiedExamplesSection);
    }

    return { types, examples, modifiedMarkdown };
}

function saveCodeSnippets(apiName: string, types: string[], examples: string[]) {
    const apiDir = path.join(SAVE_PATH, apiName);
    ensurePathExists(apiDir);

    // if only one, for types, save as types.ts, else save as types-1.ts, types-2.ts, ...
    // same for examples
    if (types.length === 1) {
        fs.writeFileSync(path.join(apiDir, "types.ts"), types[0]);
    } else {
        types.forEach((typeSnippet, index) => {
            fs.writeFileSync(path.join(apiDir, `types-${index + 1}.ts`), typeSnippet);
        });
    }

    if (examples.length === 1) {
        fs.writeFileSync(path.join(apiDir, "example.ts"), examples[0]);
    } else {
        examples.forEach((exampleSnippet, index) => {
            fs.writeFileSync(path.join(apiDir, `example-${index + 1}.ts`), exampleSnippet);
        }); 
    }
}

function main() {
    const markdownFiles = readMarkdownFiles(MARKDOWN_PATH);
    
    markdownFiles.forEach(({ name, content }) => {
        const { types, examples, modifiedMarkdown } = extractCodeSnippets(content, name);
        
        // Save code snippets
        saveCodeSnippets(name, types, examples);
        
        // Save modified markdown file
        const markdownFilePath = path.join(MARKDOWN_PATH, `${name}.md`);
        fs.writeFileSync(markdownFilePath, modifiedMarkdown);
        
        console.log(`✓ Processed ${name}: ${types.length} types, ${examples.length} examples`);
    });
    
    console.log(`\n✓ Complete! Processed ${markdownFiles.length} API files.`);
}

main();
