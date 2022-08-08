import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    inlineDependencies: true,
    emitCJS:true
  },
  entries: [
    'src/cli'
  ],
  externals:[
    "@tezjs/vite",
    "@tezjs/common"
  ]
})
