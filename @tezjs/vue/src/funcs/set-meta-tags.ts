declare const webWorker: any;
declare const document:any;
export function setMetaInfo(metaInfo: { [key: string]: any }) {
      var metas = document.querySelectorAll("meta[data-head='tezjs']");
      metas.forEach((x:any) => x.remove())
      var title = document.getElementsByTagName("title")[0];
      var canonical: HTMLLinkElement = document.querySelector('link[rel="canonical"') as HTMLLinkElement;
      if (title) title.innerText = metaInfo.title;
      else {
        title = document.createElement("title");
        title.innerText = metaInfo.title;
        document.head.insertBefore(title, document.head.firstChild);
      }
      if (canonical) {
        canonical.rel = "canonical";
        canonical.setAttribute("data-head", "tezjs");
        canonical.href = metaInfo.canonical;
      }
      else {
        canonical = document.createElement("link");
        canonical.setAttribute("data-head", "tezjs");
        canonical.rel = "canonical";
        canonical.href = metaInfo.canonical;
        document.head.insertBefore(canonical, document.head.firstChild);
      }
      if (metaInfo.metaTag)
        addMetas(metaInfo.metaTag, canonical)
      if(metaInfo.linkingData)
      addPageSchema(metaInfo.linkingData,canonical);
}

function addMetas(metaTag: { [key: string]: any }, insertBeforeElement: any) {
      ["name", "property"].forEach(propName => {
        if (metaTag[propName])
          Object.keys(metaTag[propName]).forEach(key => addMeta(propName, key, metaTag[propName][key], insertBeforeElement))
      })

}

function addMeta(type: string, key: string, value: string, insertBeforeElement: HTMLLinkElement) {
      var metaElement = document.createElement("meta");
      metaElement.setAttribute("data-head", "tezjs");
      const typeSetterProp = type === "name" ? "name" : "title"
      if (type !== "charset") {
        metaElement[typeSetterProp] = key;
        metaElement.content = value;
      } else
        metaElement.setAttribute(type, value)
      document.head.insertBefore(metaElement, insertBeforeElement);
}    

function addPageSchema(linkingData:{[key:string]:any},insertBeforeElement:HTMLElement){
    linkingData.split("--").forEach((data:string)=>{
      let scriptElement = document.createElement("script");
      scriptElement.setAttribute("data-head", "tezjs");
      scriptElement.type = "application/ld+json";
      scriptElement.innerText = JSON.stringify(data.trim());
      document.head.insertBefore(scriptElement, insertBeforeElement);
    })
}