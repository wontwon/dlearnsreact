var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common.js");
var stylesPlugin = new ExtractTextPlugin("[name].css", {allChunks: true});
var hotReloader =  new webpack.HotModuleReplacementPlugin();

module.exports = function() {
	var plugins = [
		new webpack.ProvidePlugin({
			React: "react"
		}),
		// commonsPlugin,
		stylesPlugin,
		hotReloader
	];

	return plugins;
};
