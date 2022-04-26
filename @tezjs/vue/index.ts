declare global {
    interface ImportMeta {
      glob: (path:string)=>{};
    }
  }

export {tezRouter} from './src/funcs/tez-router'
export { tez } from './src/plugins/index'
// export {TezSlot}  from './src/components/index'
// export * as TzStore from './src/store/index'
// export * from './src/const/component-state'