import { TezSeo } from "../seo/seo";
import { Component } from "./components";

    export interface MasterPage{
        name:string
        seo?:TezSeo;
        components?:Component[];
    }