import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

const banner =
`/*
 * React Chartkick
 * ${pkg.description}
 * ${pkg.repository.url}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

const input = "src/index.js";
const outputName = "ReactChartkick";
const external = Object.keys(pkg.peerDependencies);
const esExternal = external.concat(Object.keys(pkg.devDependencies));
const globals = {
  chartkick: "Chartkick",
  react: "React"
};

export default [
  {
    input: input,
    output: {
      name: outputName,
      file: pkg.main,
      format: "umd",
      banner: banner,
      globals: globals
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
      file: "dist/react-chartkick.min.js",
      format: "umd",
      globals: globals
    },
    external: external,
    plugins: [
      resolve(),
      commonjs(),
      buble(),
      uglify()
    ]
  },
  {
    input: input,
    output: {
      file: pkg.module,
      format: "es",
      banner: banner
    },
    external: esExternal,
    plugins: [
      buble()
    ]
  }
];
