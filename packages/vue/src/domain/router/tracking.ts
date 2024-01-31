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
        this.pushUrl(window.location.href)
    }

    setEntryUrl(){
        if(!this.track.entryUrl)
            this._track.entryUrl = window.location.href;
        this.save();
    }

    setReferrer(){
        if(document.referrer)
        this._track.referrer = document.referrer
    this.save()
    }

    pushUrl(url){
        this._track = this.track;
        if(this._track.uris[this._track.uris.length-1] != url){
            this._track.pagesVisited++;
            this.addUrl(this._track,url)
            this.save();
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

    save(){
        window.localStorage.setItem(state,JSON.stringify(this._track))
    }
}