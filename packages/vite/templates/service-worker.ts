/// <reference lib="WebWorker" />

export type { };
declare const self: ServiceWorkerGlobalScope;

const CACHE_VERSION: string = "#CACHE_VERSION";
const IMMUTABLE_CACHE_NAME="immutable";
const INSTALL_EVENT: string = "install";
const ACTIVATE_EVENT: string = "activate";
const FETCH_EVENT: string = "fetch";
const MESSAGE_EVENT: string = "message";
const IS_IMAGE_IMMUTABLE_CACHE:string = "#IS_IMAGE_IMMUTABLE_CACHE"
const IMMUTABLE:{[key:string]:any}= {
    images:/\.(gif|jpe?g|tiff?|png|webp|bmp|svg|ico)$/i
}

const cacheStrategy:
    {
        addToCache(request, networkResponse): Promise<any>;
        getCache(request): Promise<any>;
        makeRequest(request): Promise<any>;
        removeOldCache(): Promise<any>;
    } = new (class {

        async addToCache(request, networkResponse): Promise<any> {
            var cacheKey = `${request.url}`;
            const clonedResponse = networkResponse.clone();
            const cache = await caches.open(this.getCacheName(request));
            cache.put(cacheKey, clonedResponse);
            return networkResponse;
        }

        getCacheName(request){
            if(IS_IMAGE_IMMUTABLE_CACHE === "true" && IMMUTABLE.images.test(request.url))
                return IMMUTABLE_CACHE_NAME;
            return CACHE_VERSION;
        }

        async getCache(request): Promise<any> {
            var cacheKey = `${request.url}`;
            var cacheResponse = await caches.match(cacheKey);
            return cacheResponse;
        }

        makeRequest(request): Promise<any> {
            let strategy = null;
            switch (request.destination) {
                case "document":
                    strategy = this.networkFirstStrategy(request)
                    break;
                default:
                    strategy = this.cacheFirstStrategy(request);
            }
            return strategy;
        }

        async cacheFirstStrategy(request) {
            var cacheResponse = await this.getCache(request);
            return cacheResponse || this.fetchRequestAndCache(request);
        }

        async fetchRequestAndCache(request) {
            const networkResponse = await fetch(request);
            return this.isIgnoreCache(request) ? networkResponse : await this.addToCache(request, networkResponse);
        };

        isIgnoreCache(request){
            return request.url.indexOf(location.host) === -1;
        }

        networkFirstStrategy(request) {
            return fetch(request).then(async response => {
                if (response.status === 200)
                    return await this.addToCache(request, response);
                return response;
            }).catch(async x => await this.getCache(request))
        }

        removeOldCache() {
            return caches.keys().then(function (cacheNames) {
                return Promise.all(
                    cacheNames.filter(function (cacheName) {
                        let names =IS_IMAGE_IMMUTABLE_CACHE === "true" ? [CACHE_VERSION,IMMUTABLE_CACHE_NAME]:[CACHE_VERSION] ;
                        return names.filter(name => name === cacheName).length === 0;
                    }).map(function (cacheName) {
                        return caches.delete(cacheName);
                    })
                );
            })
        }
    })

self.addEventListener(INSTALL_EVENT, function (event) {
    event.waitUntil(self.skipWaiting());
});


self.addEventListener(ACTIVATE_EVENT, function (event) {
    event.waitUntil(self.clients.claim())
    event.waitUntil(cacheStrategy.removeOldCache());
});


self.addEventListener(FETCH_EVENT, function (event) {
    return event.respondWith(cacheStrategy.makeRequest(event.request));
});

self.addEventListener(MESSAGE_EVENT, function (event) {
    let cacheItem = event.data;
    if(cacheItem && cacheItem.cacheName){
      event.waitUntil(caches
      .open(cacheItem.cacheName)
      .then(async (cache) =>{
        return cache.addAll(cacheItem.assets);
      }
        ))
    }
});


