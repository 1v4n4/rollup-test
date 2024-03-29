import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import json from "@rollup/plugin-json";
import multiInput from 'rollup-plugin-multi-input';
import terser from '@rollup/plugin-terser';

export default {
  input: ["src/components/A.js", "src/components/B.js", "src/components/C.js"],
  output: {
    //file: "dist2/bundle-rollup.js",
    format: "cjs",
    dir: "dist2",
    sourcemap: true,
  },
  plugins: [
    image(),
    multiInput.default({ relative: 'dist2/' }),
    nodeResolve({
      extensions: [".js"],
    }),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public-rollup2"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist2" }),
    json()
  ]
};
