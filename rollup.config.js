import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/3_selection/app.js',
  output: [
    {
      format: 'esm',
      file: './src/3_selection/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};