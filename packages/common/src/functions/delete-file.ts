import * as fs from 'fs';

export function deleteFile(path:string){
    if(fs.existsSync(path))
        fs.unlinkSync(path);
}