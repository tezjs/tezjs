import { tezPages } from "../../const/tez-pages";
import { getCurrentScrollPosition } from "../../funcs/current-scroll-position";
import { getCurrentUrl } from "../../funcs/payload/get-current-url";
import { resolveRoute } from "../../funcs/resolve-pre-code";
import { HistoryState } from "../../models/history-state";
const assign = Object.assign;
export class Router{
    
    historyState:{value:HistoryState } = {value:history.state};
    url:string  = getCurrentUrl();
    currentUrl:string=this.url;
    constructor(){
        if(!this.historyState.value)
            this.changeRoute(this.url, {
                back: null,
                current: this.url,
                forward: null,
                position: history.length - 1,
                replaced: true,
                scroll: null,
            }, true);  
        window.addEventListener("popstate",({ state })=>{
            this.historyState.value = state;
            this.changeRouteState(state && state.current ?  state.current : getCurrentUrl(),true)
        })
    }
    
    push(to:string){
      this.changeRouteState(to);
    }

    changeRouteState(to,isPopState=false){
        this.resolve(to).then(t=>{
            if(!isPopState){
                const currentState = assign(
                    {}, 
                    this.historyState.value, history.state, {
                        forward: to,
                        scroll: getCurrentScrollPosition(),
                    });
                    
                    this.changeRoute(currentState.current, currentState, true);
                    const state = assign({}, this.createState({back:this.currentUrl,current: to, forward:null}), { position: currentState.position + 1 });
                    this.changeRoute(to, state, false);
            }
                this.currentUrl = to;
                tezPages.refreshRoute(to)
        })
      }

    resolve(url:string){
        return resolveRoute(url)
    }

    changeRoute(url:string,state:HistoryState,replace:boolean){
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
            this.historyState.value = state;
    }

    createState(state:HistoryState) {
        return {
            back:state.back,
            current:state.current,
            forward:state.forward,
            replaced:state.replaced,
            position: window.history.length,
            scroll: getCurrentScrollPosition(),
        };
    }

    
}