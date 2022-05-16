import { Favicon } from "../seo/favicon";
import { TezSeo } from "../seo/seo";

export interface Head extends TezSeo{
    favicon?:Favicon;
}