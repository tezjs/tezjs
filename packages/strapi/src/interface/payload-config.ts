import { PageConfig } from "./page-config";

export interface PayloadConfig{
    page:PageConfig;
    entityQueryParams:{[key:string]:[key:any]}
}