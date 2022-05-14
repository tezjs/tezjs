import { defineAsyncComponent, defineComponent ,h, KeepAlive } from "vue"
import { mapGetters } from "vuex"
import { componentState } from "../const/component-state";
import TezIndex from './tez-index'
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
            activeMasterPage: "page/getActiveMasterPage"
        })
    },
    render() {
        let layoutName  = this.activeMasterPage ? `./layouts/${this.activeMasterPage.layoutName}.layout.vue` : undefined;
        let layoutComponent = this.activeMasterPage ? componentState.layouts[`./layouts/${this.activeMasterPage.layoutName}.layout.vue`] : undefined;
        if(layoutName && !this.state[layoutName] && layoutComponent)
            this.state[layoutName] = this.vNode = h(defineAsyncComponent(() => layoutComponent()));
        else if(this.state[layoutName])
            this.vNode = this.state[layoutName];
        else
            this.vNode = this.tezNode;
        return h(h(KeepAlive,null,this.vNode));
    }
  })