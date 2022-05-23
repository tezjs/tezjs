import { defineComponent ,h, KeepAlive } from "vue"
import { mapGetters } from "vuex"
export default defineComponent({
    data(){
        return {
            state:{},
            vNode:h("div")
        }
    },
    computed: {
        ...mapGetters({
            activePageComponent: "page/activePageComponent",
            activePageUrl:"page/activePageUrl"
        })
    },
    render() {
        
        if(this.activePageUrl && this.activePageComponent && !this.state[this.activePageUrl])
            this.vNode = this.state[this.activePageUrl] = h(this.activePageComponent);
        else if(this.state[this.activePageUrl])
            this.vNode = this.state[this.activePageUrl];
        return h(h(KeepAlive,null,this.vNode));
    }
  })