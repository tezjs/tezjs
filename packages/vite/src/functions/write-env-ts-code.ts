import { writeFileSync } from "@tezjs/common"
import { KeyDefinition } from "../interface/key-definition"

export function writeTsCode(keyDefinition:KeyDefinition,path:string){
    let content = (Object.keys(keyDefinition.env).length > 0) ?`export const env : ${JSON.stringify(keyDefinition.typedDefinition).replace(/\"/g, '')}  = ${JSON.stringify(keyDefinition.env)}` :
            `export const env:any={}`
            writeFileSync(path,content,true)
}