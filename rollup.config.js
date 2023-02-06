import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/6_tree/app.js',
  output: [
    {
      format: 'esm',
      file: './src/6_tree/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};