import { commonContainer } from "@tezjs/common";
import { mergeConfig } from "vite";
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const";

export function dev(){
    commonContainer.buildOptions = {buildVersion:0, mode: "dev", rootDir: process.cwd(), port: 3000, commandName:"dev" };
    return mergeConfig(VITE_SERVER_CONFIG(),{root:commonContainer.buildOptions.rootDir});
}