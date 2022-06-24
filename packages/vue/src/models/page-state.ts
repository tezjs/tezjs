import { DefineComponent } from "vue";

export interface PageState{
    url:string;
    slots:{[key:string]:any}
    masterPageSlots:{[key:string]:any}
    layoutName:string;
    layoutComponent?:DefineComponent;
}