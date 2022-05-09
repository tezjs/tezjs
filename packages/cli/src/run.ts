import mri from 'mri'
import { COMMANDS } from './commands';
import { readConfig } from './utils/read-config';

export async function runCommand(){
    const args = mri(process.argv.slice(2),{
        boolean: [
          'no-clear'
        ]
      })
      const baseArguments = args._;
      const commandName = baseArguments.shift();
      let rootPath = baseArguments.length > 0 ? `${process.cwd()}\\${baseArguments.pop()}` : process.cwd();
      const tezConfig = await readConfig(args.mode || "",rootPath);
      if(COMMANDS[commandName]){
        COMMANDS[commandName](args,tezConfig,rootPath)
      }
}