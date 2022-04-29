declare const Image:any;
const IMAGE_DATA_STRING:{[key:string]:any} = {};
const IMAGE_STATE:{[key:string]:any} = {};
let REQUEST_COUNT:number = 0;
const imageRequestBroadcaster = new BroadcastChannel('image-request');
imageRequestBroadcaster.onmessage = (event) => {
  console.log(event.data)
        if(IMAGE_STATE[event.data.index] && IMAGE_STATE[event.data.index].url === event.data.url){
          IMAGE_DATA_STRING[event.data.url] = event.data.baseString;
          setImageSource.call(IMAGE_STATE[event.data.index].instance,IMAGE_DATA_STRING[event.data.url])
          delete IMAGE_STATE[event.data.index];
        }
};
function setImageSource(this:HTMLImageElement, source:string){
      this.setAttribute("src", source); 
}


  export function overrideImageSourceProp(){
    Object.defineProperty(Image.prototype, "src", {
      set(src) {
        if(!IMAGE_DATA_STRING[src]){
          REQUEST_COUNT = REQUEST_COUNT+1;
          IMAGE_STATE[REQUEST_COUNT] = {instance:this,url:src}
          imageRequestBroadcaster.postMessage({
              index: REQUEST_COUNT,
              url:src
            });
        }else
          setImageSource.bind(this).call(this,IMAGE_DATA_STRING[src])
      },
      enumerable: true,
      configurable: true,
    });
  }