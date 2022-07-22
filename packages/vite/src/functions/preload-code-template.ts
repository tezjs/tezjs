import { commonContainer } from '@tezjs/common';

export function getPreloadCodeTemplate(preloads:Array<string>){
    let code = `return import('./pre');`
    if(commonContainer.buildOptions.commandName === "build"){
        code = `    return preload(()=> import('./pre.js'),${JSON.stringify(preloads)});`        
    }
    return `export default function(preload){
        ${code}
    }`
}

export function postScriptPreloadCodeTemplate(preloads:Array<string>){
    return `()=> preload(()=> import('./post.js'),${JSON.stringify(preloads)})`
}
