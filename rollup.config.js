import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/4_clipper/app.js',
  output: [
    {
      format: 'esm',
      file: './src/4_clipper/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};