declare const webWorker: any;
export const appContainer:
  {
    componentPath(components: { [key: string]: any }): void,
    components: Record<string, () => Promise<{
      [key: string]: any;
    }>>
  } = new (class {
    components: Record<string, () => Promise<{
      [key: string]: any;
    }>> = {};

    componentPath(components: { [key: string]: any }) {
      this.components = components
    }
    loadImage(uri: string) {
      return new Promise((of, reject) => {
        let id = parseInt(String(Math.random() * 1000));
        webWorker.state[id] = { resolve: of };
        webWorker.postMessage({ uri: uri, id: id, action: 'load-image' })
      });
    }
    setMetaInfo(metaInfo: { [key: string]: any }) {
      var metas = document.querySelectorAll("meta[data-head='tezjs']");
      metas.forEach(x => x.remove())
      var title = document.getElementsByTagName("title")[0];
      var canonical: HTMLLinkElement = document.querySelector('link[rel="canonical"') as HTMLLinkElement;
      if (title) title.innerText = metaInfo.title;
      else {
        title = document.createElement("title");
        title.innerText = metaInfo.title;
        document.head.insertBefore(title, document.head.firstChild);
      }
      if (canonical) {
        canonical.rel = metaInfo.link.rel;
        canonical.setAttribute("data-head", "tezjs");
        canonical.href = metaInfo.link.href;
      }
      else {
        canonical = document.createElement("link");
        canonical.rel = metaInfo.link.rel;
        canonical.href = metaInfo.link.href;
        document.head.insertBefore(canonical, document.head.firstChild);
      }
      if (metaInfo.metaTag)
        this.addMetas(metaInfo.metaTag, canonical)
    }

    addMetas(metaTag: { [key: string]: any }, insertBeforeElement: any) {
      ["name", "property"].forEach(propName => {
        if (metaTag[propName])
          Object.keys(metaTag[propName]).forEach(key => this.addMeta(propName, key, metaTag[key], insertBeforeElement))
      })

    }

    addMeta(type: string, key: string, value: string, insertBeforeElement: HTMLLinkElement) {
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

    subscribe() {
      webWorker.onmessage = (e: any) => {
        var message = e.data;
        var path = message.path;
        switch (e.data.action) {
          case 'pre-fetch':
            message.data.names.forEach((path: string) => {
              if (path) {
                var linkElement: any = document.createElement("link");
                linkElement.setAttribute('data-head', 'tezjs-preload');
                linkElement.rel = "prefetch";
                linkElement.as = path.indexOf(".js") !== -1 ? "script" : "style";
                if (linkElement.as !== "style")
                  linkElement.crossOrigin = true;
                linkElement.href = path;
                document.head.appendChild(linkElement)
              }
            })
            message.data.data.forEach((path: string) => {
              if (path && typeof path !== "string") {
                var linkElement: any = document.createElement("link") as HTMLLinkElement;
                linkElement.setAttribute('data-head', 'tezjs-preload');
                linkElement.rel = "prefetch";
                linkElement.as = "fetch";
                linkElement.crossOrigin = true;
                linkElement.href = `/payload/${message.uri}/${path}.json`;
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