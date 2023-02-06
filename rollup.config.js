import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/basic/app.js',
  output: [
    {
      format: 'esm',
      file: './src/basic/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};