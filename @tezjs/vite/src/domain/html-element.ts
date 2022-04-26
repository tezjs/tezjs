import { CommonPathResolver } from "@tezjs/common";

export class HtmlElement  {
    preElements:string[]
    postElements:string[]
    commonPath:CommonPathResolver;    
    constructor(){
        this.commonPath = new CommonPathResolver();
        this.preElements = new Array<string>();
        this.postElements = new Array<string>();
    }

    get preElementString(){
        return this.getElementString(this.preElements)
    }

    get postElementString(){
        return this.getElementString(this.postElements)
    }

    private getElementString(elements:string[]){
        let element:string = '';
        elements.forEach(t=>element+=t);
        return element

    }

    addElement(element:string,isPre:boolean){
        if(isPre)
            this.preElements.push(`${element}\n`);
        else 
            this.postElements.push(`${element}\n`)
    }
}