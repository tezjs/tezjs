const state = 'state';
export class Tracking{
    _track = {
        referrer:'',
        entryUrl:'',
        pagesVisited:0,
        uris:[]
    }
    
    constructor(){
        if(!this.track.referrer)
            this.setReferrer()
        if(!this.track.entryUrl)
            this.setEntryUrl()
        this.pushUrl(window.location.href);
        document.addEventListener("click",(event:any)=>{
            const element = event.target;
            if(event.target.innerText && !this.shouldExcludeElement(element))
                this.setCTA(event.target.innerText)
        })
    }
    setCTA(text){
        window.sessionStorage.setItem('cta',JSON.stringify(text))
    }

    shouldExcludeElement(element) {
        // Exclude form elements from tracking
        if (element.tagName === 'INPUT' || element.tagName === 'BUTTON' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
            return true;
        }
    
        return false;
    }

    getCTA(){
        return window.sessionStorage.getItem("cta");
    }

    getLeadUrl(isStandAlone:boolean,currentUrl:string){
        return isStandAlone?this.getFullUrl(history.state.back): this.getFullUrl(currentUrl);
    }

    getFullUrl(url:string){
        return `${location.origin}${url}`
    }

    setEntryUrl(){
        let track = this.track;
        if(!this.track.entryUrl)
            track.entryUrl = window.location.href;
        this.save(track);
    }

    setReferrer(){
        let track = this.track
        if(document.referrer && !this.track.entryUrl)
        track.referrer = document.referrer
    this.save(track)
    }

    pushUrl(url){
        this._track = this.track;
        if(this._track.uris[this._track.uris.length-1] != url){
            this._track.pagesVisited++;
            this.addUrl(this._track,url)
            this.save(this._track);
        }
        
    }

    addUrl(track,uri){
            if (track.uris.length === 10) {
                track.uris.pop();
            }
            track.uris.unshift(uri);
        
    }

    get track(){
        const item =  window.localStorage.getItem(state)
        if(item)
            return JSON.parse(item)
        return this._track;
    }

    save(track:any){
        window.localStorage.setItem(state,JSON.stringify(track))
    }
}