declare global {
    interface ImportMeta {
      glob: (path:string)=>{};
    }
  }

export * from './src/funcs/tez-router'
export * from './src/plugins'
export * as TezComponent from './src/components/tez-component.vue'
export * as  RxBind from './src/components/rx-bind.vue'


import { appContainer } from './src/const/app-container'
if(Object.keys(appContainer.components).length === 0)
        appContainer.components = import.meta.glob('./*.vue');