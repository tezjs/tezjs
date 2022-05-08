import * as crypto from 'crypto';

export function getChecksum(text:string){
    return crypto.createHash('md5').update(text).digest('hex');
}