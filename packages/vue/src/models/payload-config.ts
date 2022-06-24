export interface PayloadConfig{
    url:string;
    slots:{[key:string]:any},
    masterPageSlots:{[key:string]:any},
    layoutName:string,
    tags:{[key:string]:any}
}