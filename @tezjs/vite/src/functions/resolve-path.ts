import * as path from 'path';

export function resolvePath(fPath:string) {
    console.log(path.resolve(process.cwd(),fPath))
    return path.resolve(process.cwd(),fPath);
} 