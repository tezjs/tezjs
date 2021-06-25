import path from 'path';
export function getPath(pathCollection: string[]): string {
    return path.join(...pathCollection);
}