/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'lf',
	jsxSingleQuote: true,
	printWidth: 80,
	semi: false,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: [
		'^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
		'^(next/(.*)$)|^(next$)',
		'^(expo(.*)$)|^(expo$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@doodleblab/(.*)$',
		'',
		'^~/',
		'^[../]',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '4.4.0',
}

export default config
