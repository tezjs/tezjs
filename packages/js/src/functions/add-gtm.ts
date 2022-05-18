export function tagManager(gtmCode:string) {
    return ()=>{
        const dataLayer = "dataLayer";
        const script = "script";
        window[dataLayer] = window[dataLayer] || [];
        window[dataLayer].push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        var f = document.getElementsByTagName(script)[0],
          j = document.createElement(script),
          dl = dataLayer != "dataLayer" ? "&l=" + dataLayer : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + gtmCode + dl;
        f.parentNode.insertBefore(j, f);
    }
  }