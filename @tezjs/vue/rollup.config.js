import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2'  
export default [
  {
    external: ['vuex'] ,
    input: 'index.ts',
    output: [
      {
        format: 'esm',
        file: '../../tz-app/node_modules/@tezjs/vue/index.mjs'
      },
      {
        format: 'cjs',
        file: '../../tz-app/node_modules/@tezjs/vue/index.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal(), typescript({
        check: false 
   }),  alias({ entries: [{ find:/^@\/(.+)/, replacement: './$1' }] })
    ]
  }
]