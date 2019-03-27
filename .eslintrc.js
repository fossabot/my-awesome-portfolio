module.exports = {
	'extends': 'eslint:recommended',
	'env': {
		'es6': true,
		'node': true,
		'browser': true
	},
	'plugins': ['html'],
	'globals': {
		'opts': true,
		'vue': true
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}