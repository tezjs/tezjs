import { VNode } from "vue";
import { ComponentItem } from "./component-item";

export interface DataState{
    nextIndex:number;
    vNodes:{[key:string]:VNode}
    components:ComponentItem[];
}