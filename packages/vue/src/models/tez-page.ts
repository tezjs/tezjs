import { DefineComponent } from "vue";
import { PayloadConfig } from "./payload-config";

export interface TezPage{
    url:string;
    components:{[key:string]:DefineComponent}
    masterPage:{[key:string]:DefineComponent}
    payload:PayloadConfig
}