import sourceMaps from 'rollup-plugin-sourcemaps'
import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')
const libraryName = 'VueSimpleMedia'
const input = 'index.js'
const sourcemap = true

export default {
  input,
  output: [
    { file: pkg.main, name: libraryName, format: 'umd', sourcemap },
    { file: pkg.module, format: 'es', sourcemap },
  ],
  plugins: [ buble({ objectAssign: 'Object.assign' }), sourceMaps() ]
}
