import { BuildOptions,TezConfig } from "@tezjs/types";

export function defineTezConfig(config:TezConfig | ((buildOptions?:BuildOptions)=>TezConfig | Promise<TezConfig>)){
    return config;
}