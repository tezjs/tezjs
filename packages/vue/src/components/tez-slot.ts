import { defineComponent, h, VNode, defineAsyncComponent, KeepAlive } from 'vue'
import { mapGetters } from 'vuex';
import { getJsonPayload } from '../funcs/payload/get-json-payload';
import { componentState } from '../const/component-state';
import { TezDataState } from '../domain/tez-data-state';
import { isBot } from '@tezjs/js';

interface DataPoint {
    dataState:TezDataState;
    url:string;
    lazyRef: VNode | null;
    isInView: Boolean;
    previousState: Boolean | null;
    observer: any | null
}
export default defineComponent({
    data(): DataPoint {
        return {
            dataState:undefined,
            url:'',
            previousState: null,
            isInView: false,
            lazyRef: null,
            observer: null,
        }
    },
    props: {
        slotName: { type: String,default:'default' } ,
        slotCategory:{ type: String,default:'page' } ,
        preserveComponentState: { type: Boolean }
    },
    computed: {
        ...mapGetters({
            activePage: "page/getActivePage",
            activePageUrl: "page/activePageUrl",
            slotComponents: "page/slotComponents",
            maxComponentsCount:'page/maxComponentsCount'
        }),
    },
    mounted(){
        this.dataState = new TezDataState(this.slotCategory)
        this.goToNextComponent(false)
    },
    methods: {
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
            
            let components = this.slotComponents(this.slotName,this.slotCategory);
            if(components.length > this.dataState.state.nextIndex && !this.dataState.state.components[this.dataState.state.nextIndex]){
                let componentItem = components[this.dataState.state.nextIndex]
                if(componentItem && !componentItem.data){
                    componentItem.data = await getJsonPayload(componentItem.itemName);
                }
                this.dataState.state.components.push(componentItem);
                this.dataState.state.nextIndex++;
            if (isInfinite || isBot())
               this.goToNextComponent(isInfinite);
            }
        }
    },
    render() {
        let vNodes: Array<VNode> = new Array<VNode>();
        if(this.dataState && this.dataState.state){
            for (let component of this.dataState.state.components) {
                if(componentState.tezAppOptions.components[component.path]){
                    if (!this.dataState.state.vNodes[component.itemName]){
                        this.dataState.state.vNodes[component.itemName] = h(defineAsyncComponent(() => componentState.tezAppOptions.components[component.path]()), { data: component.data });
                     }
                    vNodes.push(h(KeepAlive, { key: component.itemName }, this.dataState.state.vNodes[component.itemName]))
                }
            }
        }
        if (!this.lazyRef)
            this.lazyRef = h('div', { ref: 'divLazy',style:{'height':'2px'} }, "");
        vNodes.push(this.lazyRef)
        return h('div', vNodes)
    }
})