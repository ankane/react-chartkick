import js from "@eslint/js";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false
      },
      ecmaVersion: 6,
      sourceType: "module"
    },
    rules: {
      "no-var": "error",
      "semi": ["error", "never"]
    }
  }
];
