import { TezAppOptions } from "../models/tez-app-options";
import { createApp } from 'vue'
import {tez} from '../plugins/index'
import TezView from "../components/tez-view"
import { resolvePreCode } from "./resolve-pre-code";
import { componentState } from "../const/component-state";
import { imageLoader } from "../const/image-loader";

export function createTezApp(tezAppOptions:TezAppOptions){
    componentState.tezAppOptions = tezAppOptions;
    imageLoader.register();
    resolvePreCode(tezAppOptions).then(t=>createApp(TezView).
    use(tez.register(tezAppOptions)).mount('#tez_app'))
}