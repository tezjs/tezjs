import { Head } from "./html/head"

export interface AmpConfig{
    page:{
        head:Head;
        template:(url:string,item:any)=>string;
    }
}