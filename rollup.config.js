import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/12_annotations/app.js',
  output: [
    {
      format: 'esm',
      file: './src/12_annotations/bundle.js',
    },
  ],
  plugins: [resolve(), commonjs()],
}
