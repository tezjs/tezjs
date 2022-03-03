import { VITE_SERVER_CONFIG } from "./vite-server-config.const";

export const appContainer:
    {
        getViteConfig():{[key:string]:any}
    } = new (class {
        getViteConfig(){
            return VITE_SERVER_CONFIG
        }
    })();