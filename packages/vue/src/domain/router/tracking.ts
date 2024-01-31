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
            if(event.target.innerText)
                this.setCTA(event.target.innerText)
        })
    }
    setCTA(text){
        window.sessionStorage.setItem('cta',text)
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
                track.uris.shift();
            }
            
            track.uris.push(uri);
        
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