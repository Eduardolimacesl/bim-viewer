import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './build/app.js',
  output: [
    {
      format: 'esm',
      file: './build/bundle.js',
    },
  ],
  plugins: [resolve(), commonjs()],
}
