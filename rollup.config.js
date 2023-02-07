import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/14_infor_preprocessing/app.js',
  output: [
    {
      format: 'esm',
      file: './src/14_infor_preprocessing/bundle.js',
    },
  ],
  plugins: [resolve(), commonjs()],
}
