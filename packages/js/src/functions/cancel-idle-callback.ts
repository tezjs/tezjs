const callback= function (id) {
    clearTimeout(id)
  };
const cIdleCallback = typeof window !== "undefined"?  window.cancelIdleCallback || callback:callback; 