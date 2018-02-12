var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'src', 'App.js');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

	entry: {
		reactHot: 'react-hot-loader/patch',
		app: mainPath
	},
	plugins: [
		// Clears the build folder (dist) before each build
		new CleanWebPackPlugin([buildPath]),
		// Generates new index.html file with correct filename
		new HtmlWebpackPlugin({
			title: 'Viper Visualizer',
			template: 'src/index.tpl.html',
			filename: 'index.html'
		}),
		new Webpack.NamedModulesPlugin(),
		new Webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.[hash].js',
		path: buildPath
	},
	module: {
		rules: [
			// Javascript
			{
				test: /\.js$/,
				exclude: [nodeModulesPath],
				use: [
					'babel-loader'
				]
			},
			// HTML
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			// Less
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			// Fonts
			{
				test: /\.(woff|woff2)$/,
				use: ['file-loader']
			},
			// Images
			{
				test: /\.(jpeg|jpg|png|svg|gif)$/,
				use: ['file-loader']
			},
			// Json
			{
				test: /\.json$/,
				use: ['json-loader']
			}
		]
	}
};

module.exports = config;