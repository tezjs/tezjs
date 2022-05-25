import { defineComponent ,h, VNode} from "vue"
import { getJsonPayload } from "../funcs/payload/get-json-payload";
interface LazyDataPoint {
    lazyRef: VNode | null;
    observer: any | null;
    items:any[];
    index:number;
    lastItem:{totalCount:number,items:any[]} | null
}
export default defineComponent({
    data():LazyDataPoint {
        return {
            items:[],
            lazyRef: null,
            observer: null,
            index:0,
            lastItem:null
        }
    },
    props:["sourcePath","currentPage","class"],
    watch:{
        currentPage(value){
            if(this.index != value){
            this.index = value;    
            this.loadJson();
            }
        }
    },
    mounted(){
        this.subscribeLazy();
    },
    methods:{
        subscribeLazy() {
            if (this.$refs.divLazy) {
                this.observer = new IntersectionObserver(async ([{ isIntersecting }]) => {
                   if(isIntersecting){
                       this.index++;
                       this.loadJson();
                   }
                });
                this.observer.observe(this.$refs.divLazy as Element);
            }
        },
        async loadJson(){
            if(this.sourcePath && (!this.lastItem || (this.lastItem.totalCount > (this.index * this.lastItem.items.length)))){
                    let source  = await getJsonPayload(String(this.index),`/${this.sourcePath}`);
                    source.items.forEach((t:any)=>{
                        this.items.push(t)
                    })
                    this.lastItem = source;
            }else if(this.observer)
                this.observer.unobserve(this.$refs.divLazy)
        },
    },
    render() {
        let vNodes: Array<VNode> = new Array<VNode>();
        if(this.$slots && this.$slots.default)
        vNodes.push(
                h('div',{class:this.class}, this.$slots?.default({
                    items: this.items
                  })))
            
            if (!this.lazyRef)
                this.lazyRef = h('div', { ref: 'divLazy' }, "");
            vNodes.push(this.lazyRef)
            return h('div', vNodes)
    }
  })