import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off", // ou "off" se quiser desativar totalmente
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-expressions" : "off", // cuidado com isso, pode causar bugs sutis
    },
  },
];

export default eslintConfig;