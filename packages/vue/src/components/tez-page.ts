import { defineComponent ,h, KeepAlive } from "vue"
import TezSlot from "../components/tez-slot"
export default defineComponent({
    data(){
        return {
            vNode:h("div")
        }
    },
    
    render() {
        this.vNode = h(TezSlot);
        return h(h(KeepAlive,null,this.vNode));
    }
  })