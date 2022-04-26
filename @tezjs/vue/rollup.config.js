import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2'  
export default [
  {
    input: 'index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal(), typescript({
        check: false 
   }),  alias({ entries: [{ find:/^@\/(.+)/, replacement: './$1' }] })
    ]
  }
]