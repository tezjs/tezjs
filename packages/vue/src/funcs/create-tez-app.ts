import { TezAppOptions } from "../models/tez-app-options";
import { createApp } from 'vue'
import {tez} from '../plugins/index'
import TezView from "../components/tez-view"
import { resolvePreCode } from "./resolve-pre-code";
import { componentState } from "../const/component-state";

export function createTezApp(tezAppOptions:TezAppOptions){
    componentState.tezAppOptions = tezAppOptions;
    resolvePreCode(tezAppOptions).then(t=>createApp(TezView).
    use(tez.register(tezAppOptions)).mount('#tez_app'))
}