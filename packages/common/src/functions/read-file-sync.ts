import * as fs from 'fs'
import { existsSync } from 'fs';
export function readFileSync(path: string,isString:boolean = false) : string | {[key:string]:any}  |any[] {
    if(existsSync(path)){
        var content = fs.readFileSync(path, "utf-8");
        content = isString ? content: JSON.parse(content);
        return content;
    }
}