import { commonContainer } from '@tezjs/common';

export function getPreloadCodeTemplate(preloads:Array<string>){
    let code = `return import('./pre');`
    let files = []
    preloads.forEach(path=>files.push(`${path}?v=${commonContainer.buildOptions.buildVersion}`))
    files = preloads;
    if(commonContainer.buildOptions.commandName === "build"){
        code = `    return preload(()=> import('./pre.js?v=${commonContainer.buildOptions.buildVersion}'),${JSON.stringify(preloads)});`        
    }
    return `export default function(preload){
        ${code}
    }`
}

export function postScriptPreloadCodeTemplate(preloads:Array<string>){
    return `()=> preload(()=> import('./post.js?v=${commonContainer.buildOptions.buildVersion}'),${JSON.stringify(preloads)})`
}
