import prettier from "eslint-config-prettier";

const eslintConfig = [
  {
    // ... наявна конфігурація
    extends: ["next/core-web-vitals", "eslint:recommended"],
  },
  prettier, // ✅ додає підтримку Prettier
];

export default eslintConfig;
