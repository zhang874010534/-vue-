module.exports = function(api) {
	api.cache(true);

	const presets = ['@babel/preset-env'];
	const plugins = [
		'@babel/plugin-proposal-class-properties',
		'@babel/transform-runtime',
		'transform-remove-strict-mode',
		['import', {
			libraryName: 'vant',
			libraryDirectory: 'es',
			style: true
		}, 'vant']
	];

	return {
		presets,
		plugins
	};
}
