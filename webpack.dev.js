const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');

module.exports = Merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: buildPath
		// contentBase: buildPath,
		// hot: true
	}
	// output: {
	// 	filename: 'bundle.js'
	// }
});