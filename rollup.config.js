import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/8_visibility/app.js',
  output: [
    {
      format: 'esm',
      file: './src/8_visibility/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};