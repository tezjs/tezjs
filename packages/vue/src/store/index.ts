import { createStore, ModuleTree, Store } from 'vuex'
import pageModule from './pages/page.module'
export var store:Store<unknown> = undefined;
export function createTezStore(clientModules:ModuleTree<unknown>){
  let modules = {
    page:pageModule
  };
  if(clientModules)
  modules = {...clientModules,...modules}
  store = createStore({
    modules: modules
  })
  return store;
}
