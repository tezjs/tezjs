import { createServer } from 'vite'
import { dev } from "./dev";

export async function createViteServer(){
  let config = dev();
  return await createServer(config);
}