import { TezSeo } from "../seo/seo";
import { Component } from "./component";

    export interface MasterPage{
        name:string
        seo?:TezSeo;
        components?:Component[];
    }