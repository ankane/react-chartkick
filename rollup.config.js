import buble from "@rollup/plugin-buble";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const input = "src/index.js";
const outputName = "ReactChartkick";
const external = Object.keys(pkg.peerDependencies).concat(Object.keys(pkg.dependencies));
const esExternal = external;
const globals = {
  chartkick: "Chartkick",
  react: "React"
};
const banner =
`/*!
 * React Chartkick v${pkg.version}
 * ${pkg.description}
 * ${pkg.repository.url}
 * ${pkg.license} License
 */
`;

const minBanner = `/*! React Chartkick v${pkg.version} | ${pkg.license} License */`;

export default [
  {
    input: input,
    output: {
      name: outputName,
      file: pkg.main,
      format: "umd",
      banner: banner,
      globals: globals,
      exports: "named"
    },
    external: external,
    plugins: [
      resolve(),
      commonjs(),
      buble()
    ]
  },
  {
    input: input,
    output: {
      name: outputName,
      file: pkg.main.replace(/\.js$/, ".min.js"),
      format: "umd",
      banner: minBanner,
      globals: globals,
      exports: "named"
    },
    external: external,
    plugins: [
      resolve(),
      commonjs(),
      buble(),
      terser()
    ]
  },
  {
    input: input,
    output: {
      file: pkg.module,
      format: "es",
      banner: banner,
      exports: "named"
    },
    external: esExternal,
    plugins: [
      buble()
    ]
  }
];
