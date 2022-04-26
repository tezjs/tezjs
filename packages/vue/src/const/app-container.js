export const appContainer
     = new (class {
        components = {}
        loadImage(uri){
            return new Promise((of,reject)=>{
                let id = Math.random() * 1000;
                id = parseInt(id);
               webWorker.state[id] = {resolve:of};
               webWorker.postMessage({uri:uri,id:id,action:'load-image'})
            });
        }
        getComponentData(componentIndex,uri) {
            return fetch(`\\payload${uri}\\${componentIndex}.json`).then(async response=>await response.json())
        }
        setMetaInfo(metaInfo) {
            var metas = document.querySelectorAll("meta[data-head='tezjs']");
            metas.forEach(x=>x.remove())
              var title = document.getElementsByTagName("title")[0];
              var canonical = document.querySelector('link[rel="canonical"');
              if(title) title.innerText = metaInfo.title; 
              else{
                title = document.createElement("title");
                title.innerText = metaInfo.title;
                document.head.insertBefore(title,document.head.firstChild);
              }
              if(canonical) {
                canonical.rel=metaInfo.link.rel;
                canonical.setAttribute("data-head","tezjs");
                canonical.href = metaInfo.link.href;
              } 
              else{
                canonical = document.createElement("link");
                canonical.rel=metaInfo.link.rel;
                canonical.href = metaInfo.link.href;
                document.head.insertBefore(canonical,document.head.firstChild);
              }
              if(metaInfo.metaTag)
                this.addMetas(metaInfo.metaTag,canonical)
        }

        addMetas(metaTag,insertBeforeElement){
            ["name","property"].forEach(propName=>{
                if(metaTag[propName])
                    Object.keys(metaTag[propName]).forEach(key=>this.addMeta(propName,key,metaTag[key],insertBeforeElement))
            })
            
        }

        addMeta(type,key,value,insertBeforeElement){
            var metaElement = document.createElement("meta");
            metaElement.setAttribute("data-head","tezjs");
            const typeSetterProp = type === "name" ? "name": "title"
            if(type !== "charset"){
                metaElement[typeSetterProp] = key;
                metaElement.content = value;
            }else
                metaElement.setAttribute(type,value)
          document.head.insertBefore(metaElement,insertBeforeElement);
        }

        subscribe(){
            webWorker.onmessage =(e)=>{
                var message = e.data;
                var path = message.path;
                switch(e.data.action){
                  case 'pre-fetch':
                    message.data.names.forEach((path)=>{
                      if(path){
                      var linkElement = document.createElement("link");
                      linkElement.setAttribute('data-head','tezjs-preload');
                      linkElement.rel = "prefetch";
                      linkElement.as = path.indexOf(".js") !== -1 ? "script":"style";
                      if(linkElement.as !== "style")
                        linkElement.crossOrigin=true;
                      linkElement.href=path;
                      document.head.appendChild(linkElement)
                      }
                    })
                    message.data.data.forEach((path)=>{
                      if(path && typeof path !== "string"){
                      var linkElement = document.createElement("link");
                      linkElement.setAttribute('data-head','tezjs-preload');
                      linkElement.rel = "prefetch";
                      linkElement.as = "fetch";
                      linkElement.crossOrigin=true;
                      linkElement.href=`/payload/${message.uri}/${path}.json`;
                      document.head.appendChild(linkElement)
                      }
                    })
                    break;
                  case 'load-image':
                    webWorker.state[message.id].resolve(message.data);
                    break;
                  case 'set-meta-info':
                    this.setMetaInfo(message.data)
                    break;
                }
              }
        }
    })();