import { TezConfig } from "@tezjs/types";
import * as tez from "@tezjs/vite";
export async function devCommand(args:{[key:string]:any},tezConfig:TezConfig,rootPath:string){
    tez.tzServer(tezConfig,rootPath)
}