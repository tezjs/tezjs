import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { tez } from '@tezjs/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),tez()]
})
