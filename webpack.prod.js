const Webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = Merge(common, {
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new Webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
	]
	// output: {
	// 	filename: 'bundle.[hash].js',
	// }
});