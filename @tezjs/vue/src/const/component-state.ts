
export const componentState:
{
    componentPath(components:{[key:string]:any}):void,
    components:Record<string, () => Promise<{
        [key: string]: any;
    }>>
} = new (class {
    components:Record<string, () => Promise<{
        [key: string]: any;
    }>> = {};

    componentPath(components:{[key:string]:any}){
        this.components = components
    }
})();