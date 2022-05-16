import { APP_ROOT_PATH } from "./core.const";
import vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'
export const VITE_SERVER_CONFIG:UserConfig = {
    root:APP_ROOT_PATH,
    logLevel: 'info',
    envDir:'environments',
    resolve:{
      alias:{
        '#env':"/node_modules/.cache/tez/env.ts"
      }
    },
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