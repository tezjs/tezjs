import { subText } from "@tezjs/common"
import { CLIENT_ENV_SUBSTRING } from '../const/core.const';
import { tsDefinition } from './get-ts-definition';
export function getParsedEnv(parsed:{[key:string]:any}){
    let serverEnv:{[key:string]:any} =undefined;
    let clientEnv:{[key:string]:any} = {};
    let clientTypedDefinition:{[key:string]:any} = {};
    let serverTypedDefinition:{[key:string]:any} = {};

    if(parsed){
        serverEnv = {};
        const keys = Object.keys(parsed);
        if(keys.length > 0){
            keys.forEach(key=>{
                let keyName = key;
                const {definition,transformValue} =tsDefinition(parsed[key]);
                
                if(key.length > CLIENT_ENV_SUBSTRING.length && subText(key,0,CLIENT_ENV_SUBSTRING.length).toLowerCase() === CLIENT_ENV_SUBSTRING.toLowerCase()){
                    keyName = subText(key,CLIENT_ENV_SUBSTRING.length,key.length);
                    serverTypedDefinition[keyName]= definition
                    clientTypedDefinition[keyName] = definition;
                    clientEnv[keyName] = transformValue;
                    serverEnv[keyName] = transformValue
                }else{
                    serverTypedDefinition[keyName]= definition;
                    serverEnv[keyName] = transformValue;
                }
                
            });
        }
    }
    return {client:{env:clientEnv,typedDefinition:clientTypedDefinition},server:{env:serverEnv || parsed,typedDefinition:serverTypedDefinition}};
}