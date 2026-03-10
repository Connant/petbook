import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		rules: {
			plugins: {
				import: importPlugin,
			},

			'@typescript-eslint/await-thenable': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-misused-promises': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/return-await': 'warn',
			curly: 'warn',
			eqeqeq: 'warn',
			'import/no-cycle': 'warn',
			'no-console': 'warn',
			'no-undef': 'off',
			'no-unreachable': 'warn',
			'no-unused-vars': 'off',
			'object-shorthand': 'warn',
			'prefer-const': 'warn',
			'react/jsx-no-useless-fragment': 'warn',
			'require-await': 'warn',
		},
	},
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
