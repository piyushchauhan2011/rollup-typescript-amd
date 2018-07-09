import resolve from 'rollup-plugin-node-resolve';
import {
  uglify
} from 'rollup-plugin-uglify';
import rollupTypescript from 'rollup-plugin-typescript';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.ts',
  experimentalCodeSplitting: true,
  output: {
    dir: 'public',
    format: 'amd', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: !production && true
  },
  plugins: [
    rollupTypescript({
      typescript: require('typescript')
    }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    production && uglify() // minify, but only in production
  ]
};