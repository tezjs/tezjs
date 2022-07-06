import { DefineComponent } from "vue";
import { AfterInteractionConfig } from "./after-interaction-config";
import { PayloadConfig } from "./payload-config";

export interface TezPage{
    components:{[key:string]:DefineComponent}
    masterPage:{[key:string]:DefineComponent}
    payload:PayloadConfig
    afterInteraction?:AfterInteractionConfig
    postScript:()=>Promise<any>
}