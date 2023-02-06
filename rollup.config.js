import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/2_basic/app.js',
  output: [
    {
      format: 'esm',
      file: './src/2_basic/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};