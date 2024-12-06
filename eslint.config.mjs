import esLint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import tsEsLint from "typescript-eslint";

export default tsEsLint.config(esLint.configs.recommended, tsEsLint.configs.recommended, prettierConfig);
