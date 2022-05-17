import { commonContainer } from '@tezjs/common';
import vue from '@vitejs/plugin-vue'
import { UserConfig } from 'vite'
import { tez } from "../domain/tez";
export const VITE_SERVER_CONFIG = (config?:UserConfig)=> {return {
    root:commonContainer.buildOptions.rootDir,
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
      plugins: [vue(),tez()]
  }
}