
export const imageLoader:
{
    resolve(url:string):Promise<string>
} = new (class {
    cachedImage:{[key:string]:any} = {};
    resolveRequest:{[key:string]:any} = {};
    imageRequestBroadcaster:Worker = undefined
    constructor(){
        if(window.location.hostname.indexOf("localhost") === -1){
            this.imageRequestBroadcaster = new Worker("/tz.js");
            this.imageRequestBroadcaster.onmessage = (event) => {
                if(this.resolveRequest[event.data.url]){
                    this.cachedImage[event.data.url] = event.data.baseString;
                    this.resolveRequest[event.data.url].forEach(resolve=>resolve(event.data.baseString))
                delete this.resolveRequest[event.data.url];
                }
            }
        }
    }

    resolve(url:string){
        return new Promise<string>((resolve,reject)=>{
            if(!this.cachedImage[url])
            {
                if(!this.resolveRequest[url])
                this.resolveRequest[url]=[resolve]
                else
                this.resolveRequest[url].push(resolve)
                this.imageRequestBroadcaster.postMessage({
                    url:url
                  });
            }
            else
                resolve(this.cachedImage[url])
        })
        
    }


})();