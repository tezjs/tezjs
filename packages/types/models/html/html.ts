import { BodyTag } from "./body";
import { Head } from "./head";

export interface HtmlPage{
    head?:Head;
    lang?:string;
    body?:BodyTag
}