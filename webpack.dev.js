const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');

module.exports = Merge(common, {
	devtool: 'eval',
	devServer: {
		contentBase: buildPath,
		hot: true
	}
});