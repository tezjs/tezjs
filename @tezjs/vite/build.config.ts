import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    './index'
  ],
externals:[
  "html-minifier",
  "vite"
]
})
