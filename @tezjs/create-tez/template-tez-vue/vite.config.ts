import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {tez} from "@tezjs/vite"
import { TEZ_CONFIG } from "./tez.config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),tez(TEZ_CONFIG)]
})
