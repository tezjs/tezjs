import { componentState } from "../const/component-state";

export async function getLayoutName(cPath:string){
    const defaultLayoutName:string = "default";
    let component = await componentState.tezAppOptions.pages[cPath]();
    let layoutName= component && component.default ? component.default.layout || defaultLayoutName :defaultLayoutName;
    return {layoutName:layoutName,pageComponent:component};
}