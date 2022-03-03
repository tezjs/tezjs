import fs, { existsSync } from 'fs';
export function readFileSync(path: string,isString:boolean = false) {
    if(existsSync(path)){
        var content = fs.readFileSync(path, "utf-8");
        content = isString ? content: JSON.parse(content);
        return content;
    }
}