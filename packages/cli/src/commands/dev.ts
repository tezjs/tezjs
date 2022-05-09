import { TezConfig } from "@tezjs/types";
import { tzServer } from "@tezjs/vite"
export async function devCommand(args:{[key:string]:any},tezConfig:TezConfig,rootPath:string){
    tzServer(tezConfig,rootPath)
}