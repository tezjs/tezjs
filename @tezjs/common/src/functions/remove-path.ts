import * as fs from 'fs';

export function removePath(path:string){
    if(fs.existsSync(path))
        fs.rmSync(path, { recursive: true, force: true });
}