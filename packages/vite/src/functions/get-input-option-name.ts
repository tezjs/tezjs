import { commonContainer } from "@tezjs/common";

export function getInputOptionName(name:string){
    return `${name.toLowerCase()}.${commonContainer.buildOptions.buildVersion}`;
}