import { TezAppOptions } from "../models/tez-app-options";
import { createApp } from 'vue'
import {tez} from '../plugins/index'
import TezView from "../components/tez-view"

export function createTezApp(tezAppOptions:TezAppOptions){
    createApp(TezView).
            use(tez.register(tezAppOptions)).mount('#tez_app')
    
}