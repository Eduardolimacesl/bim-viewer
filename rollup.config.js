import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './docs/app.js',
  output: [
    {
      format: 'esm',
      file: './docs/bundle.js',
    },
  ],
  plugins: [resolve(), commonjs()],
}
