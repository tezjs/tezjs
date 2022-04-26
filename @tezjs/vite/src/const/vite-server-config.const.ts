import { APP_ROOT_PATH } from "./core.const";

export const VITE_SERVER_CONFIG:{[key:string]:any} = {
    root:APP_ROOT_PATH,
    logLevel: 'info',
    server: {
      middlewareMode: 'ssr',
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  }