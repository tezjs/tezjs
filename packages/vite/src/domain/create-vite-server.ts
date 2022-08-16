import { createServer } from 'vite'
import { dev } from "./dev";

export async function createViteServer(){
  let config = await dev({isSsr:true});
  return await createServer(config);
}