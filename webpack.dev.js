const Merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = Merge(common, {
	output: {
		filename: 'bundle.js'
	}
});