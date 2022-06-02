import { defineComponent ,h, VNode} from "vue"
import { idleCallback } from '@tezjs/js'
import { getScreenSize } from "../funcs/get-screen-size";
const NODE_NAME:string = "div";
interface LazyDataPoint {
    isInteractive:boolean
    observer:any;
    lazyRef:any;
    lastIndex:number;
    defaultCount:number;
    sourceItems:any[];
}
export default defineComponent({
    data():LazyDataPoint {
        return {
            sourceItems:[],
            isInteractive:false,
            observer:null,
            lazyRef:null,
            lastIndex:0,
            defaultCount:10    
        }
    },
    props:["items","class","childClass","countSM","countMD","countLG","countXL","vNode","vChildNode"],
    computed: {
        pickCount: {
          get() {
            let count = this.defaultCount;
            const screenSize = getScreenSize();
            if(screenSize >= 1200)
                count = this.countXL || this.defaultCount;
            else if(screenSize >=992)
                count = this.countLG || this.defaultCount;
            else if (screenSize >=768)
                count = this.countMD || this.defaultCount;
            else 
                count = this.countSM || this.defaultCount
            return parseInt(count);
          },
          set(v:any) {
          }
        }
      },
      watch:{
        items:function(value){
          this.bindNext();
        }
      },
    mounted(){
        this.subscribeLazy();
    },
    methods:{
        subscribeLazy() {
            if (this.$refs.divLazy) {
                this.observer = new IntersectionObserver(async ([{ isIntersecting }]) => {
                    this.isInteractive = isIntersecting;
                   if(isIntersecting)
                       this.bindNext();
                });
                this.observer.observe(this.$refs.divLazy as Element);
            }
        },
        bindNext(){
            if (this.isInteractive) {
                if (this.sourceItems.length <= this.items.length) {
                  let length = this.items.length;
                  let pickCount = this.pickCount;
                  length = this.items.length > this.lastIndex + pickCount ? this.lastIndex + pickCount : this.lastIndex + (this.items.length - this.sourceItems.length);
                  for (var i = this.lastIndex; i < length; i++) {
                    let item = this.items[i];
                    this.sourceItems.push(item);
                  }
                  this.lastIndex = length;
                }
              }
        }
    },
    render() {
        let vNodes: Array<VNode> = new Array<VNode>();
        if(this.$slots && this.$slots.default)
            this.sourceItems.forEach((item:any,index:any)=>{
                let slot:any = this.$slots && this.$slots.default ? this.$slots.default({...item}) : [];
                vNodes.push(
                    h(this.vChildNode || NODE_NAME,{class:this.childClass,key:index},slot))
            })
            if(this.sourceItems.length > 0)
                idleCallback(this.bindNext, { timeout: 2e3 })
            if (!this.lazyRef)
                this.lazyRef = h('div', { ref: 'divLazy' }, "");
            vNodes.push(this.lazyRef)
            return h(this.vNode || NODE_NAME,{class:this.class}, vNodes)
    }
  })