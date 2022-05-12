import { TezConfig } from "@tezjs/types";
import { BLANK, ENVIRONMENTS } from "../const/core.const";
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const"
import { overrideEnvVariables } from "../functions/override-env-variables"
import { createServer,mergeConfig } from 'vite'
import { tez } from "./tez";
export async function createViteServer(tezConfig:TezConfig,rootPath:string){
  await overrideEnvVariables(BLANK,ENVIRONMENTS);  
  
  VITE_SERVER_CONFIG.plugins.push(tez(tezConfig))
  let config = rootPath ? mergeConfig(VITE_SERVER_CONFIG,{root:rootPath}) : VITE_SERVER_CONFIG;
  return await createServer(config);
}