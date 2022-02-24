import { DataSanitizer } from "./data-sanitizer";

export interface PageConfig{
    maxPreLoadComponent:number,
    dataSanitizers?:DataSanitizer[]
    htmlSanitizer?(htmlCollection:string[]):string[];
}