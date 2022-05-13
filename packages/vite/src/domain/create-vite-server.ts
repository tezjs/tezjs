import { TezConfig } from "@tezjs/types";
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const"
import { createServer,mergeConfig } from 'vite'
import { tez } from "./tez";
import { tezResolve } from "./tez-resolve";
export async function createViteServer(tezConfig:TezConfig,rootPath:string){
  VITE_SERVER_CONFIG.plugins.push(tez(tezConfig,rootPath))
  VITE_SERVER_CONFIG.plugins.push(tezResolve())
  let config = rootPath ? mergeConfig(VITE_SERVER_CONFIG,{root:rootPath}) : VITE_SERVER_CONFIG;
  return await createServer(config);
}