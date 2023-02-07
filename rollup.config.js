import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/9_multithreading/app.js',
  output: [
    {
      format: 'esm',
      file: './src/9_multithreading/bundle.js',
    },
  ],
  plugins: [resolve(), commonjs()],
}
