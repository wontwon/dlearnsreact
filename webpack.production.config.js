var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = require("./webpack/plugins")();

var config = {
  context: path.join(__dirname, "src"),
  // We change to normal source mapping
  devtool: 'source-map',
  entry: {
      app: './app/index.js'
  },
  output: {
    path: path.join(__dirname, "cloud", "public", "js"),
    filename: "[name].js",
  },
  module: {
    loaders: [
          { 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
             test: /\.less$/,
             loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
          },
          {
             test: /\.css$/,
             loader: ExtractTextPlugin.extract("style-loader", "css-loader")
          }
    ]
  },
  plugins: plugins
};

module.exports = config;