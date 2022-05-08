import { readFileSync } from "./read-file-sync";

export const tzRequire = (url:string) => {
    let module:any = {};
    ((content:string, module:any) => eval(content))(readFileSync(url, true) as string, module)
    return module.exports;
}