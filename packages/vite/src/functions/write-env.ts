import { CommonPathResolver } from "@tezjs/common";
import { ParsedEnv } from "../interface/parsed-env.model";
import { writeTsCode } from "./write-env-ts-code";

export function writeEnv(parsedEnv:ParsedEnv){
    let pathResolver  = new CommonPathResolver();
    if(parsedEnv?.client)
        writeTsCode(parsedEnv.client,pathResolver.clientEnvPath)
    if(parsedEnv?.server)
        writeTsCode(parsedEnv.server,pathResolver.serverEnvPath)
}