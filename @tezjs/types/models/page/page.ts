import { TezSeo } from "../seo/seo";
import { Sitemap } from "../seo/sitemap";
import { Component } from "./components";
import { PageRedirect } from "./page-redirect";

export interface Page{
    url:string;
    masterPage?:string;
    seo?:TezSeo;
    components:Component[];
    reditects?:PageRedirect[];
    sitemap?:Sitemap;
}