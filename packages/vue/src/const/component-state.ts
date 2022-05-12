
export const componentState:
{
    componentPath(components:{[key:string]:any}):void,
    layoutPath(layouts:{[key:string]:any}),
    components:Record<string, () => Promise<{
        [key: string]: any;
    }>>,
    layouts:Record<string, () => Promise<{
        [key: string]: any;
    }>>
} = new (class {
    components:Record<string, () => Promise<{
        [key: string]: any;
    }>> = {};

    layouts:Record<string, () => Promise<{
        [key: string]: any;
    }>> = {};

    componentPath(components:{[key:string]:any}){
        this.components = components;
    }

    layoutPath(layouts:{[key:string]:any}){
        this.layouts = layouts;
    }
})();