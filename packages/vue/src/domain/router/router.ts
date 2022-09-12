import { tezPages } from "../../const/tez-pages";
import { getCurrentScrollPosition } from "../../funcs/current-scroll-position";
import { getCurrentUrl } from "../../funcs/payload/get-current-url";
import { resolveRoute } from "../../funcs/resolve-pre-code";
import { setMetaInfo } from "../../funcs/set-meta-tags";
import { HistoryState } from "../../models/history-state";
const assign = Object.assign;
export class Router{
    
    historyState:{value:HistoryState } = {value:history.state};
    url:string  = getCurrentUrl();
    currentUrl:string=this.url;
    routeOptions:{path:string;query?:{[key:string]:string}}
    constructor(){
        const { pathname, search, hash } = location;
        this.url= pathname+search+hash;
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
            this.changeRouteState(state && state.current ?  state.current : getCurrentUrl(),true).then(t=>{
                const hash:string = location.hash;
                if(hash){
                    let element = document.getElementById(hash.replace("#","")) ;
                    if(element)
                        element.scrollIntoView();
                }
            })
        })
    }
    
    push(to:string | {path:string;query?:{[key:string]:string}}){
        if(typeof to === "string")
            this.changeRouteState(to);
        else if(to.path){
            this.routeOptions= to;
            this.changeRouteState(to.path)
        }
    }

    changeRouteState(to,isPopState=false){
        this.changeScrollPosition();
        return this.resolve(to).then(t=>{
            this.refreshPageMetaTags(to)
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
                    this.routeOptions= undefined;
            }
                this.currentUrl = to;
                tezPages.refreshRoute(to);
        })
      }

    resolve(url:string){
        return resolveRoute(url)
    }

    refreshPageMetaTags(to:string){
        let payload = tezPages.getPayload(to)
        if (payload && payload.tags)
              setMetaInfo(payload.tags);
    }

    changeRoute(url:string,state:HistoryState,replace:boolean){
            history[replace ? 'replaceState' : 'pushState'](state, '',!replace?this.getFullUrl(url):url);
            this.historyState.value = state;
    }

    getFullUrl(url:string){
        let queryParams = '';
        if(this.routeOptions && this.routeOptions.query){
            queryParams="?"
            Object.keys(this.routeOptions.query).forEach(key=>{
                queryParams+=`${key}=${this.routeOptions.query[key]}`
            })
        }
        return `${url}${queryParams}`
    }

    changeScrollPosition(){
        if ('scrollBehavior' in document.documentElement.style)
        window.scrollTo({
            behavior:'smooth',
            top:0
        });
        else {
        window.scrollTo(window.pageXOffset,0);
    }
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