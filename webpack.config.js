var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = require("./webpack/plugins")();

module.exports = [
	{
		context: path.join(__dirname, "src"),
		entry: {
			app: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './app/index.js']
		},
		output: {
			path: path.join(__dirname, "public", "js"),
			filename: "[name].js",
			publicPath: "http://localhost:8080/public/js/"
		},
		module: {
			loaders: [
				{ 
					test: /\.js$/,
					exclude: /node_modules/,
					loaders: ['react-hot','babel']
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
		devServer: {
			publicPath: "http://localhost:8080/public/js",
			hot: true,
			headers: { "Access-Control-Allow-Origin": "*" }
		},
		plugins: plugins
	}
];

if (process.argv.indexOf("--notify") !== -1) {
	config.plugins.push(new WebpackNotifierPlugin({
		title: "8skills",
		contentImage: path.join(__dirname, "public/favicon.ico")
	}));
}

