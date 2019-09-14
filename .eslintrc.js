module.exports = {
	env: {
		es6: true,
		node: true,
		'jest/globals': true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 2018,
	},
	plugins: ['jest'],
	rules: {
		'no-console': 'off',
		'linebreak-style': ['error', 'unix'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
