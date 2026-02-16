import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react"; // ✅ 추가
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended, // ✅ 추가
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // React 17+ JSX Transform → React import 필요 없음
      "react/react-in-jsx-scope": "off",

      // JSX에서 사용된 컴포넌트를 "사용됨"으로 인식
      "react/jsx-uses-vars": "error",

      // 사용 안 하는 변수 경고
      "no-unused-vars": "warn",

      // props 타입 검사 (학습 중엔 off)
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
