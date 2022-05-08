declare const window:any;
export const requestIdleCallback = window.requestIdleCallback ||
  function (cb:any) {
    const start = Date.now()
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      })
    }, 1)
  }

