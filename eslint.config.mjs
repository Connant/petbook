import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
    {
        rules: {
            "@typescript-eslint/await-thenable": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-misused-promises": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/return-await": "warn",
            "curly": "warn",
            "eqeqeq": "warn",
            "import/no-cycle": "warn",
            "import/order": "warn",
            "newline-before-return": "warn",
            "no-console": "warn",
            "no-undef": "off",
            "no-unreachable": "warn",
            "no-unused-vars": "off",
            "object-shorthand": "warn",
            "prefer-const": "warn",
            "react/jsx-no-useless-fragment": "warn",
            "require-await": "warn"
        }
    },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
