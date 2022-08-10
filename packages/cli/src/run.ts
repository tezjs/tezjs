import { commonContainer,getPath,convertDateToTicks } from '@tezjs/common';
import mri from 'mri'
import { COMMANDS } from './commands';

export async function runCommand(){
    const args = mri(process.argv.slice(2),{
        boolean: [
          'no-clear'
        ]
      })
      const baseArguments = args._;
      const commandName = baseArguments.shift();
      let rootPath = baseArguments.length > 0 ? getPath([process.cwd(),baseArguments.pop()],false) : process.cwd();
      commonContainer.buildOptions = {buildVersion:convertDateToTicks(new Date()), mode:args.mode === "dev"? "" : args.mode,rootDir:rootPath,port:args.port || 3000,commandName:commandName};
      if(COMMANDS[commandName]){
        COMMANDS[commandName]()
      }
}