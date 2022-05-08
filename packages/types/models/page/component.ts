type TypedFunc = (url?:string) => any | Promise<any>;
export interface Component{
    name:string;
    slotName?:string;
    data?:string | TypedFunc | {[key:string]:any} | Array<{[key:string]:any}>;
}