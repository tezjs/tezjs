import { defineAsyncComponent, defineComponent ,h, KeepAlive } from "vue"
import { mapGetters } from "vuex"
import { componentState } from "../const/component-state";
import TezIndex from './tez-index'
export default defineComponent({
    computed: {
        ...mapGetters({
            activeMasterPage: "page/activeMasterPageName"
        })
    },
    render() {
        let layoutComponent = this.activeMasterPage ? componentState.layouts[`./layouts/${this.activeMasterPage.layoutName}.layout.vue`] : undefined;
        return h(h(KeepAlive,null,h(layoutComponent ? defineAsyncComponent(() => layoutComponent()) : TezIndex)));
    }
  })