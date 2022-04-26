import * as path from 'path';

export function resolvePath(fPath:string) {
    return path.resolve(process.cwd(),fPath);
} 