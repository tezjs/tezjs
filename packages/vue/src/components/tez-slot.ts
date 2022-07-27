import { defineComponent, h, VNode, KeepAlive } from 'vue'
import { getJsonPayload } from '../funcs/payload/get-json-payload';
import { isBot } from '@tezjs/js';
import { activePageState } from '../const/active-page-state';
import { tezPages } from '../const/tez-pages';
import { cacheState } from '../const/cache-state';
import { getCurrentUrl } from '../funcs/payload/get-current-url';
import { idleCallback,isMobile } from '@tezjs/js';
import { getPostLoadScriptUrl } from '../funcs/get-preload-script-url';
import { PageState } from '../models/page-state';
import { registerTezPage } from '../funcs/register-tez-page';

interface DataPoint {
    lazyRef: VNode | null;
    isInView: Boolean;
    previousState: Boolean | null;
    observer: any | null;
    slots: { [key: string]: any };
    masterPageSlots: { [key: string]: any };
    components: Array<{ name: string, data: { [key: string]: any }, id: string }>;
    nextIndex: number;
    postScript: () => Promise<any>;
}
export default defineComponent({
    data(): DataPoint {
        return {
            postScript: null,
            previousState: null,
            isInView: false,
            lazyRef: null,
            observer: null,
            slots: {},
            masterPageSlots: {},
            components: new Array<{ name: string, data: { [key: string]: any }, id: string }>(),
            nextIndex: 0
        }
    },
    props: {
        slotName: { type: String, default: 'default' },
        slotCategory: { type: String, default: 'page' },
        preserveComponentState: { type: Boolean }
    },
    mounted() {
        this.slots = activePageState.page.slots;
        this.masterPageSlots = activePageState.page.masterPageSlots;
        this.postScript = activePageState.page.postScript
        if (this.slotCategory !== "master")
            activePageState.hooks.hook("tez:activePageChanged", (pageState: PageState) => {
                this.slots = pageState.slots;
                this.masterPageSlots = pageState.masterPageSlots;
                this.postScript = pageState.postScript;
                this.components = new Array<{ name: string, data: { [key: string]: any }, id: string }>();
                this.nextIndex = 0;
                this.goToNextComponent(false)
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

        subscribeLazy() {
            if (this.$refs.divLazy) {
                this.observer = new IntersectionObserver(async ([{ isIntersecting }]) => {
                    this.isInView = isIntersecting;
                    if (isIntersecting && this.previousState !== isIntersecting)
                        this.goToNextComponent();
                    this.previousState = isIntersecting
                });
                this.observer.observe(this.$refs.divLazy as Element);
            }
        },
        async goToNextComponent() {
            if (!this.observer) {
                this.subscribeLazy();
                return;
            }
            if (this.isInView) {
                let components = this.getSlotComponents(this.slotName, this.slotCategory);
                if (components.length > this.nextIndex && !this.components[this.nextIndex]) {
                    let componentItem = components[this.nextIndex]
                    let componentName = this.getComponentName(componentItem);
                    if(tezPages.components[componentName]){
                        this.components.push(componentItem);
                        this.nextIndex++;
                        if (components[this.nextIndex] && !components[this.nextIndex].data && this.postScript)
                        this.loadPostScript();
                        if (isBot())
                            this.goToNextComponent();
                        else
                            idleCallback(() => this.goToNextComponent(), { timeout: 0 })
                    }
                }
            }

        },
        loadPostScript() {
            return this.postScript().then((postScript) => {postScript(registerTezPage);this.postScript = null});
        },
        getComponentName(component:any){
            return isMobile() && component.mobileComponentName ? component.mobileComponentName : component.name;
        }
        
    },

    render() {
        let vNodes: Array<VNode> = new Array<VNode>();
        for (let component of this.components) {
            let componentName = this.getComponentName(component) 
                let vNode = cacheState.getVNode(component.id);
                if (!vNode)
                    vNode = cacheState.cacheVNode(component.id, h(tezPages.components[componentName], { data: component.data }));
                vNodes.push(h(KeepAlive, { key: `${getCurrentUrl()}${component.itemName}` }, vNode))
        }
        if (!this.lazyRef)
            this.lazyRef = h('div', { ref: 'divLazy', style: { 'height': '2px' } }, "");
        vNodes.push(this.lazyRef)
        return h('div', vNodes)
    }
})