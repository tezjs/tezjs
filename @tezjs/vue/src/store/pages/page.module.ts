import pageState from './page.state'
import pageActions from './page.actions'
import pageMutations from './page.mutations'
import pageGetters from './page.getters'
export default {
    namespaced:true,
    state:pageState,
    actions:pageActions,
    mutations:pageMutations,
    getters:pageGetters
}