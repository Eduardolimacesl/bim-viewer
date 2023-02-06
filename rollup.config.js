import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/7_visibility/app.js',
  output: [
    {
      format: 'esm',
      file: './src/7_visibility/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};