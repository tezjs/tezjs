import { CommonPathResolver, getPath, writeFileSync } from "@tezjs/common";
import { GlobWriter } from "@tezjs/payload";

function globTemplate(pathResolver:CommonPathResolver){
    const globWriter = new GlobWriter();
    let inputOptions = {};
    let componentsString = ''
    let layoutsString = ''
    globWriter.components.forEach(name=>{
        componentsString+=`"${name}": import("/@/components/${name}.vue"),`
        inputOptions[`${name}.component`] = getPath([pathResolver.componentsPath,`${name}.vue`],false);
    })
    globWriter.layouts.forEach(name=>{
        layoutsString+=`"${name}.layout": import("/@/layouts/${name}.vue"),`
        inputOptions[`${name}.layout`] = getPath([pathResolver.layoutsPath,`${name}.vue`],false);
    })
    return {template: `export const glob={
        components :{${componentsString}},
        layouts :{${layoutsString}}
    };console.log(glob);`
    ,inputOptions:inputOptions
}
}

export function writeDepsAndGlob(pathResolver:CommonPathResolver){
    const {template,inputOptions} = globTemplate(pathResolver) ;
    writeFileSync(pathResolver.getFilePath([pathResolver.cachePath],"glob.ts"),template,true) 
    return inputOptions;
}