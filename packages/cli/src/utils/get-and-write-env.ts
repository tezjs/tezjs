import { CommonPathResolver,subText,writeFileSync } from "@tezjs/common"
import { CLIENT_ENV_SUBSTRING } from '../const/core.const';
import { tsDefinition } from './get-ts-definition';
export function getAndWriteEnv(parsed:{[key:string]:any}){
    let env:{[key:string]:any} = undefined;
    if(parsed){
        const keys = Object.keys(parsed);
        if(keys.length > 0){
            const pathResolver = new CommonPathResolver();
            let clientEnvKeys = {};
            env = {};        
            let typeDefinition:{[key:string]:any} = {};
            keys.forEach(key=>{
                let keyName = key;
                if(key.length > CLIENT_ENV_SUBSTRING.length && subText(key,0,CLIENT_ENV_SUBSTRING.length).toLowerCase() === CLIENT_ENV_SUBSTRING.toLowerCase()){
                    keyName = subText(key,CLIENT_ENV_SUBSTRING.length,key.length);
                    const {definition,transformValue} =tsDefinition(parsed[key]);
                    typeDefinition[keyName] = definition;
                    clientEnvKeys[keyName] = transformValue;
                    env[keyName] = parsed[key]
                }else
                    env[keyName] = parsed[keyName]
                
            });
            let content = (Object.keys(clientEnvKeys).length > 0) ?`export const env : ${JSON.stringify(typeDefinition).replace(/\"/g, '')}  = ${JSON.stringify(clientEnvKeys)}` :
            `export const env:any={}`
                writeFileSync(pathResolver.clientEnvPath,content,true)
            return env;
        }
    }
    return parsed;
}