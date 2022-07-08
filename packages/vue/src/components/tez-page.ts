import { defineComponent ,h, KeepAlive } from "vue"
import TezSlot from "../components/tez-slot"
export default defineComponent({
    data(){
        return {
            state:{},
            vNode:h("div")
        }
    },
    
    render() {
        if(this.activePageUrl && this.activePageComponent && !this.state[this.activePageUrl])
            this.vNode = this.state[this.activePageUrl] = h(this.activePageComponent);
        else if(this.state[this.activePageUrl])
            this.vNode = this.state[this.activePageUrl];
        else
            this.vNode = h(TezSlot);
        return h(h(KeepAlive,null,this.vNode));
    }
  })