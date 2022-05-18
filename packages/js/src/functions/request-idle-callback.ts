const callback= function (cb) {
    const start = Date.now()
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      })
    }, 1)
  };
export const idleCallback = typeof window !== "undefined"? window.requestIdleCallback || callback :callback;