/** @typedef  {import("stylelint").Config} StylelintConfig */

/** @type { StylelintConfig } */

const config = {
	extends: [
		'stylelint-a11y/recommended',
		'stylelint-config-standard',
		'stylelint-config-prettier-scss',
		'stylelint-config-clean-order',
	],
	plugins: [
		'stylelint-a11y',
		'stylelint-css-modules',
		'stylelint-declaration-block-no-ignored-properties',
	],
	rules: {
		'css-modules/composed-class-names': true,
		'css-modules/css-variables': [
			true,
			{
				resolve: {
					modules: ['node_modules', 'app/src'],
				},
			},
		],
		'plugin/declaration-block-no-ignored-properties': true,
	},
}

export default config
