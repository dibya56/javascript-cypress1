import globals from "globals";
import pluginJs from "@eslint/js";
import pluginCypress from 'eslint-plugin-cypress/flat'
import stylisticJs from '@stylistic/eslint-plugin-js'


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginCypress.configs.recommended,
  {
    plugins: {
      cypress: pluginCypress,
      stylistJs: stylisticJs
    },
    rules: {
      "cypress/unsafe-to-chain-command": "error",
      "cypress/no-pause": "warn",
      "stylistJs/max-len": "warn",
    }
  }
];