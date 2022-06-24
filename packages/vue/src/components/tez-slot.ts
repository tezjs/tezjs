import { defineComponent, h, VNode, KeepAlive } from 'vue'
import { getJsonPayload } from '../funcs/payload/get-json-payload';
import { isBot } from '@tezjs/js';
import { activePageState } from '../const/active-page-state';
import { tezPages } from '../const/tez-pages';
import { cacheState } from '../const/cache-state';

interface DataPoint {
    lazyRef: VNode | null;
    isInView: Boolean;
    previousState: Boolean | null;
    observer: any | null;
    slots:{[key:string]:any};
    masterPageSlots:{[key:string]:any};
    components:Array<{name:string,data:{[key:string]:any},id:string}>;
    nextIndex:number;
}
export default defineComponent({
    data(): DataPoint {
        return {
            previousState: null,
            isInView: false,
            lazyRef: null,
            observer: null,
            slots:{},
            masterPageSlots:{},
            components:new Array<{name:string,data:{[key:string]:any},id:string}>(),
            nextIndex:0
        }
    },
    props: {
        slotName: { type: String,default:'default' } ,
        slotCategory:{ type: String,default:'page' } ,
        preserveComponentState: { type: Boolean }
    },
    mounted(){
        this.slots = activePageState.page.slots;
        this.masterPageSlots = activePageState.page.masterPageSlots;
        if(this.slotCategory !== "master")
        activePageState.hooks.hook("tez:slotsChanged",(newSlots:{slots:{[key:string]:any},masterPageSlots:{[key:string]:any}})=>{
            this.slots = newSlots.slots;
            this.masterPageSlots = newSlots.masterPageSlots;
            this.components = new Array<{name:string,data:{[key:string]:any},id:string}>();
            this.nextIndex = 0;
        })
        this.goToNextComponent(false)
    },
    methods: {
        getSlotComponents(slotName, slotCategory) {
            if (slotCategory === "master") {
              return this.masterPageSlots[slotName] ? this.masterPageSlots[slotName] : [];
            }
            return this.slots[slotName] ? this.slots[slotName] : [];
          },
        splice(name: string) {
            let splitText: string[] = name.split("-");
            splitText = splitText.splice(1, splitText.length);
            return splitText.join("-");
        },
        async getData(name: string) {
            return await getJsonPayload(name);
        },
        tzTicked() {
            if (this.isInView)
                this.goToNextComponent(false);
        },
        subscribeLazy() {
            if (this.$refs.divLazy) {
                this.observer = new IntersectionObserver(async ([{ isIntersecting }]) => {
                    if (isIntersecting && this.previousState !== isIntersecting){
                        this.goToNextComponent(false);
                    }
                        
                    this.isInView = isIntersecting;
                    this.previousState = isIntersecting
                });
                this.observer.observe(this.$refs.divLazy as Element);
            }
        },
        async goToNextComponent(isInfinite: boolean) {
            if (!this.observer){
                this.subscribeLazy();
                return;
            }
            
            let components = this.getSlotComponents(this.slotName,this.slotCategory);
            if(components.length > this.nextIndex && !this.components[this.nextIndex]){
                let componentItem = components[this.nextIndex]
                if(componentItem && !componentItem.data){
                    componentItem.data = await getJsonPayload(componentItem.itemName);
                }
                this.components.push(componentItem);
                this.nextIndex++;
            if (isInfinite || isBot())
               this.goToNextComponent(isInfinite);
            }
        }
    },
    render() {
        let vNodes: Array<VNode> = new Array<VNode>();
            for (let component of this.components) {
                if(tezPages.components[component.name]){
                    let vNode = cacheState.getVNode(component.id);
                    if (!vNode)
                        vNode = cacheState.cacheVNode(component.id,h(tezPages.components[component.name], { data: component.data }));
                    vNodes.push(h(KeepAlive, { key: component.itemName }, vNode))
                }
            }
        if (!this.lazyRef)
            this.lazyRef = h('div', { ref: 'divLazy',style:{'height':'2px'} }, "");
        vNodes.push(this.lazyRef)
        return h('div', vNodes)
    }
})