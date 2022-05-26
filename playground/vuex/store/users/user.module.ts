import userState from './user.state'
import userActions from './user.actions'
import userMutations from './user.mutations'
import userGetters from './user.getters'
export default {
    namespaced:true,
    state:userState,
    actions:userActions,
    mutations:userMutations,
    getters:userGetters
}