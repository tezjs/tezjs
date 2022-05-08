import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    './index'
  ],
  dependencies:[],
externals:[
  "axios",
  "markdown-it",
  "sharp",
  "@tezjs/common"
]
})
