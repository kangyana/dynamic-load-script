import path from 'path';
import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: path.resolve(__dirname, '../lib/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, '../dist/load-script.esm.js'),
      format: 'es'
    },
    {
      file: path.resolve(__dirname, '../dist/load-script.min.js'),
      format: 'umd',
      name: 'loadScript'
    },
  ],
  plugins: [
    typescript({
      tsconfig: path.resolve('./tsconfig.json')
    }),
    terser()
  ]
}