import { CommonPathResolver, getPath, writeFileSync } from "@tezjs/common";
import { getFriendlyComponentName, GlobWriter } from "@tezjs/payload";

function globTemplate(pathResolver:CommonPathResolver){
    const globWriter = new GlobWriter();
    let inputOptions = {};
    let componentsString = ''
    let layoutsString = ''
    let pagesString=''
    globWriter.components.forEach(name=>{
        let fileName = `${getFriendlyComponentName(name)}.component`
        componentsString+=`"${fileName}": import("/@/components/${name}.vue"),`
        inputOptions[`${fileName}`.toLowerCase()] = getPath([pathResolver.componentsPath,`${name}.vue`],false);
    })
    globWriter.layouts.forEach(name=>{
        let fileName = `${getFriendlyComponentName(name)}.layout`
        layoutsString+=`"${fileName}": import("/@/layouts/${name}.vue"),`
        inputOptions[`${fileName}`] = getPath([pathResolver.layoutsPath,`${name}.vue`],false);
    })
    globWriter.pages.forEach(name=>{
        let fileName = `${getFriendlyComponentName(name)}.page`
        pagesString+=`"${fileName}": import("/@/${name}.vue"),`
        inputOptions[`${fileName}`] = getPath([pathResolver.sourceCodePath,`${name}.vue`],false);
    })
    return {template: `export const glob={
        components :{${componentsString}},
        layouts :{${layoutsString}},
        pages :{${pagesString}}
    };console.log(glob);`
    ,inputOptions:inputOptions
}
}

export function writeDepsAndGlob(pathResolver:CommonPathResolver){
    const {template,inputOptions} = globTemplate(pathResolver) ;
    writeFileSync(pathResolver.getFilePath([pathResolver.cachePath],"glob.ts"),template,true) 
    return inputOptions;
}