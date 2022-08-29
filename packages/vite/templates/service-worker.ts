/// <reference lib="WebWorker" />

export type {};
declare const self: ServiceWorkerGlobalScope;

const CACHE_VERSION:string = "#CACHE_VERSION";
const INSTALL_EVENT:string = "install";
const ACTIVATE_EVENT:string = "activate";
const FETCH_EVENT:string = "fetch";

const cacheStrategy:
    {
        addToCache(request,networkResponse):Promise<any>;
        getCache(request):Promise<any>;
        makeRequest(request):Promise<any>;
        removeOldCache():Promise<any>;
    } = new (class {
        
        async addToCache(request,networkResponse):Promise<any>{
            var cacheKey = `${request.url}`;
            const clonedResponse = networkResponse.clone();
            const cache = await caches.open(CACHE_VERSION);
            cache.put(cacheKey, clonedResponse);
            return networkResponse;
        }

        async getCache(request):Promise<any>{
            var cacheKey = `${request.url}`;
            var cacheResponse = await caches.match(cacheKey);
            return cacheResponse;
        }
        makeRequest(request):Promise<any>{
            return this.fetchRequestAndCache(request);
        }

        async fetchRequestAndCache(request) {
            const networkResponse = await fetch(request);
            return await this.addToCache(request,networkResponse);
        };

        removeOldCache(){
            return caches.keys().then(function(cacheNames) {
                return Promise.all(
                  cacheNames.filter(function(cacheName) {
                      return [CACHE_VERSION].filter(name => name === cacheName).length === 0
                  }).map(function(cacheName) {
                    return caches.delete(cacheName);
                  })
                );
              })
        }
    })

self.addEventListener(INSTALL_EVENT, function(event) {
    event.waitUntil(self.skipWaiting());
});


self.addEventListener(ACTIVATE_EVENT, function(event) {
  event.waitUntil(self.clients.claim())
  event.waitUntil(cacheStrategy.removeOldCache());
});


self.addEventListener(FETCH_EVENT, function(event) {
    return event.respondWith(cacheStrategy.makeRequest(event.request));
});


