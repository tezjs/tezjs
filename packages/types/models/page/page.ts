import { TezSeo } from "../seo/seo";
import { Sitemap } from "../seo/sitemap";
import { Component } from "./component";
import { PageRedirect } from "./page-redirect";

export interface Page{
    url:string;
    masterPageName?:string;
    seo?:TezSeo;
    components:Component[];
    redirectRoutes?:PageRedirect[];
    sitemap?:Sitemap;
}