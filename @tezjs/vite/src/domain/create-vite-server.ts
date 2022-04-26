import { BLANK, ENVIRONMENTS } from "../const/core.const";
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const"
import { overrideEnvVariables } from "../functions/override-env-variables"
export async function createViteServer(){
  await overrideEnvVariables(BLANK,ENVIRONMENTS);  
  const { createServer: createViteServer } = require('vite')
  return await createViteServer(VITE_SERVER_CONFIG);
}