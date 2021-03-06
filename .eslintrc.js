'use strict';

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	extends: 'eslint-config-bbva',
	env: {
		node: true
	},
	rules: {
		'no-sync': 0,
		'no-process-env': 0,
		'no-unused-expressions': 0
	}
};
