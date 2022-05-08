export class PageSlot
{
    slots:{[key:string]:any} = {};

    getSlot(slotName:string){
        return (!this.slots[slotName || "default"]) ? this.slots[slotName || "default"] = [] : this.slots[slotName || "default"];
    }
}