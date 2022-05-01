type TypedFunc = (url?:string) => any | Promise<any>;
export interface Component{
    name:string;
    slotName?:string;
    payload?:string | TypedFunc;
}