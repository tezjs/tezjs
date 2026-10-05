import { TezAppOptions } from "../models/tez-app-options";
import { createApp } from 'vue'
import {tez} from '../plugins/index'
import TezView from "../components/tez-view"
import { resolvePreCode } from "./resolve-pre-code";
import { componentState } from "../const/component-state";
import { imageLoader } from "../const/image-loader";
import { isBot } from "@tezjs/js";
import { activePageState } from "../const/active-page-state";
import { registerTezPage } from "./register-tez-page";
import { registerGlobalSafeguard, restoreSsrHtml, saveSsrHtml } from "./ssr-html";

export function createTezApp(tezAppOptions:TezAppOptions){
    saveSsrHtml();
    registerGlobalSafeguard();
    componentState.tezAppOptions = tezAppOptions;
    imageLoader.register();
    resolvePreCode(tezAppOptions).then(async t => {
        if(isBot() && activePageState.page.postScript){
            try {
                const postScript = await activePageState.page.postScript();
                postScript.default(registerTezPage);
                activePageState.page.postScript = null;
            } catch (error) {
                restoreSsrHtml();
                return;
            }
        }
        const app = createApp(TezView).use(tez.register(tezAppOptions));
        app.config.errorHandler = (err) => {
            if(isBot()){
                restoreSsrHtml();
            }
        };
        app.mount('#tez_app');
    }).catch(error => {
        if(isBot()){
            restoreSsrHtml();
        }
    });
}