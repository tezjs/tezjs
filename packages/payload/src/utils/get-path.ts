import path from 'path';
import { createPath } from './create-path';
export function getPath(pathCollection: string[], isCreateFolder: boolean = false): string {
    const currentPath = path.join(...pathCollection);
    if (isCreateFolder)
        createPath(currentPath)
    return currentPath;
}