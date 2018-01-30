var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'App.js');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'cheap-module-source-map',
  entry: [

    // For hot style updates
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',

    // Our application
    mainPath],
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  module: {

    loaders: [

      // I highly recommend using the babel-loader as it gives you
      // ES6/7 syntax and JSX transpiling out of the box
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: [nodeModulesPath]
      },

      // Let us also add the style-loader and css-loader, which you can
      // expand with less-loader etc.
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebPackPlugin([buildPath]),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      filename: '../index.html',
      title: 'Viper Visualizer',
    })
  ]
};

module.exports = config;