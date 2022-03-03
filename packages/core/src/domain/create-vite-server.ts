import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const"

export async function createViteServer(){
  return await require('vite').createServer(VITE_SERVER_CONFIG)
}