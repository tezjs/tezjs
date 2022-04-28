import * as fs from 'fs';

export function removePath(path:string){
    console.log(path)
    console.log(fs.existsSync(path))
    if(fs.existsSync(path))
        fs.rmSync(path, { recursive: true, force: true });
}