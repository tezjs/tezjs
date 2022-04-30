import { RouterOptions,RouteRecordRaw } from "vue-router";
import { TezSeo } from '@tezjs/types'
type TezRouteRecordRaw = RouteRecordRaw & {seo?:TezSeo}
export interface TezRouterOptions extends RouterOptions {
routes:TezRouteRecordRaw[]
}