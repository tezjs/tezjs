import { ImportState } from "../interface/import-state"

export const tezTemplate = (importState:ImportState)=>{
    return `
    import { createTezApp } from '@tezjs/vue';
    ${importState.imports}
    ${importState.runtimeImports}
    createTezApp({
        ${importState.props}
    });
    `
}