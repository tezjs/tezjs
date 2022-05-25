import { defineAsyncComponent, defineComponent ,h, KeepAlive } from "vue"
import { mapGetters } from "vuex"
import { componentState } from "../const/component-state";
import TezIndex from './tez-index'
import TezPage from "./tez-page"
export default defineComponent({
    data(){
        return {
            state:{},
            tezNode:h(TezIndex), 
            vNode:undefined
        }
    },
    computed: {
        ...mapGetters({
            activeMasterPage: "page/getActiveMasterPage",
            activePageUrl: "page/activePageUrl"
        })
    },
    render() {
        let layoutName  = this.activeMasterPage ? `/layouts/${this.activeMasterPage.layoutName}.vue` : undefined;
        let layoutComponent = this.activeMasterPage && componentState.tezAppOptions.layouts ? componentState.tezAppOptions.layouts[layoutName] : undefined;
        if(layoutName && !layoutComponent)
            layoutComponent = ()=>new Promise((resolve:any)=>resolve({render(){return h(TezPage)}}))
        if(layoutName && !this.state[layoutName] && layoutComponent)
            this.state[layoutName] = this.vNode = h(defineAsyncComponent(() => layoutComponent()));
        else if(this.state[layoutName])
            this.vNode = this.state[layoutName];
        else if(this.activePageUrl)
            this.vNode = this.tezNode;
        else
            this.vNode = h('div');
        return h(h(KeepAlive,null,this.vNode));
    }
  })