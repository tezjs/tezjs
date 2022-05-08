import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    './index'
  ],
externals:[
  "axios",
  "markdown-it",
  "sharp"
]
})
