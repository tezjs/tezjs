import { CommonPathResolver, writeFileSync } from "@tezjs/common";

function depsTemplate(deps:{[key:string]:string}){
    let jString = ``
    Object.keys(deps).forEach(key=>{
        jString+=`"${key}":()=>import("${deps[key]}"),`
    })
    return `export const deps:{[key:string]:Function}= {${jString}};console.log(deps);`
}

function globTemplate(){
    return `export const glob={
        components :import.meta.glob("/components/**/*.vue"),
        layouts :import.meta.glob("/layouts/**/*.vue"),
        pages :import.meta.glob("/pages/**/*.vue")
    };console.log(glob);`
}

export function writeDepsAndGlob(deps:{[key:string]:string}){
    const pathResolver = new CommonPathResolver();
    writeFileSync(pathResolver.getFilePath([pathResolver.cachePath],"deps.ts"),depsTemplate(deps),true) 
    writeFileSync(pathResolver.getFilePath([pathResolver.cachePath],"glob.ts"),globTemplate(),true) 
}