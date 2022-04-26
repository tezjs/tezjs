declare const window:any;
export const cancelIdleCallback = window.cancelIdleCallback || function (id) {
    clearTimeout(id)
  }