import { defineComponent ,h, KeepAlive } from "vue"
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
        return h(h(KeepAlive,null,this.vNode));
    }
  })