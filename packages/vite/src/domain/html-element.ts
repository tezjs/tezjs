import { CommonPathResolver } from "@tezjs/common";

export class HtmlElement  {
    preHeadElements:string[]
    postHeadElements:string[]
    bodyElements:string[]
    inlineElment:string;
    commonPath:CommonPathResolver;    
    constructor(){
        this.commonPath = new CommonPathResolver();
        this.preHeadElements = new Array<string>();
        this.postHeadElements = new Array<string>();
        this.bodyElements = new Array<string>();
    }

    get preElementString(){
        return this.getElementString(this.preHeadElements)
    }

    get postElementString(){
        return this.getElementString(this.postHeadElements)
    }

    private getElementString(elements:string[]){
        let element:string = '';
        elements.forEach(t=>element+=t);
        return element

    }

    addHeadChildElement(element:string,isPre:boolean){
        if(isPre)
            this.preHeadElements.push(`${element}\n`);
        else 
            this.postHeadElements.push(`${element}\n`)
    }

    addBodyChildElement(element:string){
        this.bodyElements.push(`${element}\n`)
    }

    addInline(element:string){
        this.inlineElment+= element;
    }
}