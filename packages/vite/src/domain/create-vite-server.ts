import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const"
import { createServer,mergeConfig } from 'vite'
import { commonContainer } from "@tezjs/common";

export async function createViteServer(){
  let config = mergeConfig(VITE_SERVER_CONFIG(),{root:commonContainer.buildOptions.rootDir});
  return await createServer(config);
}