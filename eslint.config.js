import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "no-dupe-keys": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/no-children-prop": "error",
      "react/react-in-jsx-scope": "off", // not needed with automatic JSX transform
    },
  },
];