export default {
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	plugins: ['@trivago/prettier-plugin-sort-imports'],

	importOrder: [
		'^react$',
		'^next',

		'<THIRD_PARTY_MODULES>',

		'^@/app/(.*)$',
		'^@/entities/(.*)$',
		'^@/pages/(.*)$',
		'^@/features/(.*)$',
		'^@/widgets/(.*)$',
		'^@/shared/(.*)$',

		'^[./]',
	],

	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};
