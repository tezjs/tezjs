import { commonContainer, CommonPathResolver } from '@tezjs/common';

export function getPreloadCodeTemplate(preloads:Array<string>,commonPath:CommonPathResolver){
    let code = `return import('./pre');`
    if(commonContainer.buildOptions.commandName === "build"){
        code = `    return preload(()=> import('./${commonPath.preScriptName}'),${JSON.stringify(preloads)});`        
    }
    return `export default function(preload){
        ${code}
    }`
}

export function postScriptPreloadCodeTemplate(preloads:Array<string>,commonPath:CommonPathResolver){
    return `()=> preload(()=> import('./${commonPath.postScriptName}'),${JSON.stringify(preloads)})`
}
