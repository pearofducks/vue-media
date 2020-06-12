const pkg = require('./package.json')
const input = 'index.js'

export default {
  input,
  output: [
    { file: pkg.module, format: 'es' },
  ],
  external: ['vue']
}
