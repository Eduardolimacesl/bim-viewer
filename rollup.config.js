import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/5_properts/app.js',
  output: [
    {
      format: 'esm',
      file: './src/5_properts/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};