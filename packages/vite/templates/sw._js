
async function deleteCache(request, cacheResponse) {
    const cache = await caches.open(getCacheName(request));
    const keys = await cache.keys();
    for (var key of keys) {
        var splitKey = key.url.split("?")[0];
        if (splitKey === request.url) {
            const result = await cache.delete(key);
            cacheResponse = undefined;
            break;
        }
    }
    return cacheResponse;
}
function getRequestHash(request) {
    var key = request.url.replace(`${self.location.origin}`, "");
    var extension = request.url.split(".").pop();
    var hashKey = "";
    switch (extension) {
        case "css":
            hashKey = assets.styles[key];
            break;
        case "js":
            hashKey = assets.scripts[key];
            break;
        case "json":
            hashKey = assets.json[key];
            break;
        default:
            if (request.destination === "image") hashKey = "Image";
            else hashKey = assets.html[key];
            break;
    }
    return hashKey;
}
const cacheFirstStrategy = async (request) => {
    var hashKey = getRequestHash(request);
    var webKey = hashKey ? `?web_key=${hashKey}` : ``;
    var cacheKey = `${request.url}${webKey}`;
    var cacheResponse = await caches.match(`${request.url}${webKey}`);
    if (!cacheResponse) {
        cacheResponse = await caches.match(cacheKey, { ignoreSearch: true });
        if (cacheResponse) cacheResponse = await deleteCache(request, cacheResponse);
    } else if (!hashKey) cacheResponse = await deleteCache(request,cacheResponse);
    return cacheResponse || fetchRequestAndCache(request, cacheKey, hashKey);
};
const fetchRequestAndCache = async (request, cacheKey, isCache) => {
    const networkResponse = await fetch(request);
    const clonedResponse = networkResponse.clone();
    const cache = await caches.open(getCacheName(request));
    if (isCache) {
        cache.put(cacheKey, networkResponse);
    }
    return clonedResponse;
};
const payloadCacheName = "payload_v1";
const assetsCacheName = "assets_v1";
const assetsImageCache = "assets-cache";
const getCacheName = (request) => {
    var extension = request.url.split(".").pop();
    if (extension === "json") return payloadCacheName;
    else if (request.destination === "image") return assetsImageCache;
    return assetsCacheName;
};
self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
});
self.addEventListener("install", async (event) => {
    self.skipWaiting();
});
self.addEventListener("fetch", (event) => {
    return event.respondWith(cacheFirstStrategy(event.request));
});

const broadcast = new BroadcastChannel('image-request');
broadcast.onmessage = (event) => {
   fetch(event.data.url)
    .then(response => {
  return response.blob();
    })
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        broadcast.postMessage({ index:event.data.index,url:event.data.url,baseString:reader.result  }); 
        resolve(reader.result)
      }
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }))
};
