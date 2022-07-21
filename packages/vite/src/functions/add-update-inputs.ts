import { CommonPathResolver, getPath } from "@tezjs/common"

export function addUpdateInputs(inputs:{[key:string]:string},pathResolver:CommonPathResolver){

   const deps= {
             tez: pathResolver.tezTsPath,
             glob: getPath([pathResolver.cachePath,"glob.ts"],false),
    }
    return {...inputs,...deps}
}