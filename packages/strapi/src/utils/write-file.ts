import fs from 'fs';
export async function writeFileSync(path: string, content: any, isString: boolean = false) {
    content = !isString? JSON.stringify(content) : content
    await fs.writeFileSync(path, content);
}