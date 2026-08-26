import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "api/**",
      ".next/**",
      "out/**",
      ".playwright-mcp/**",
      "claude-seo/**",
    ],
  },
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/content/generated/**/*.tsx"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
