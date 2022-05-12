import { APP_ROOT_PATH } from "./core.const";
import vue from '@vitejs/plugin-vue'
export const VITE_SERVER_CONFIG:{[key:string]:any} = {
    root:APP_ROOT_PATH,
    logLevel: 'info',
    envDir:'environments',
    server: {
      middlewareMode: 'ssr',
      watch: {
        usePolling: true,
        interval: 100
      }
    },
    build: {
      rollupOptions: {
        output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
        }
      }
      },
      plugins: [vue()]
  }