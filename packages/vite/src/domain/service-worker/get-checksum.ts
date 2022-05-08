import * as crypto from 'crypto';
import * as fs from 'fs';

export function getChecksum(filePath:string) {
    return new Promise(function (resolve, reject) {
      const hash = crypto.createHash('md5');
      const input = fs.createReadStream(filePath);
  
      input.on('error', reject);
  
      input.on('data', function (chunk) {
        hash.update(chunk);
      });
  
      input.on('close', function () {
        resolve(hash.digest('hex'));
      });
    });
  }