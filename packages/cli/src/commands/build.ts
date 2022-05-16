import { TezConfig } from "@tezjs/types";
import * as tez from "@tezjs/vite";
export async function buildCommand(args:{[key:string]:any},tezConfig:TezConfig,rootPath:string){
    tez.build(tezConfig,rootPath)
}