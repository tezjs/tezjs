import { ComponentItem } from "../models/component-item";
import { DataState } from "../models/data-state";
import store from '../store';
export class TezDataState{
    _url:string = '';
    _state:{[key:string]:DataState} = {};
    acitvePageUrl:string = "page/activePageUrl"
    acitveMasterPageName:string = "page/activeMasterPageName"
    _propName:string;
    constructor(public slotCategory:string){
        this._propName = this.slotCategory === "master" ? this.acitveMasterPageName : this.acitvePageUrl
        this.setState();
    }

    urlChanged(url:string){
            this._url = url;
            this.setState();
    }


    get state():DataState{
        if(!this._state[store.getters[this._propName]])
        this.setState();
        return this._state[store.getters[this._propName]] || {};
    }

    set state(value:DataState){
        if(!this._state[store.getters[this._propName]])
            this._state[store.getters[this._propName]] = value;
    }

    setState(){
        this.state = { nextIndex:0, vNodes:{}, components:new Array<ComponentItem>() };
    }
}