import mri from 'mri'
import { readConfig } from './utils/read-config';
export function main () {
    const args = mri(process.argv.slice(2),{
      boolean: [
        'no-clear'
      ]
    })
    const baseArguments = args._;
    const commandName = baseArguments.shift();
    let rootPath = baseArguments.length > 0 ? `${process.cwd()}\\${baseArguments.pop()}` : process.cwd();
    readConfig(args.mode || "",rootPath);
    console.log(args)
  }