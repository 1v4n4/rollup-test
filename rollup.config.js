import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import json from "@rollup/plugin-json";

// import postcss from 'rollup-plugin-postcss';

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle-rollup.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    image(),

    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public-rollup"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
    json()
  ]
};
