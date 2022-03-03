import { CommonPathResolver } from "@tezjs/common";

export class HtmlElement  {
    elements:string[]
    commonPath:CommonPathResolver;    
    constructor(){
        this.commonPath = new CommonPathResolver();
        this.elements = new Array<string>();
    }

    addElement(element:string){
        this.elements.push(`${element}\n`);
    }
}