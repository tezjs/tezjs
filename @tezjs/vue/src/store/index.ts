import { createStore } from 'vuex'
import pageModule from './pages/page.module'
const store = createStore({
    modules: {
      page:pageModule
    }
  })
console.log(store)
  export default store;