var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var stylesPlugin = new ExtractTextPlugin("[name].css", {allChunks: true});
var hotReloader =  new webpack.HotModuleReplacementPlugin();
var uglify = new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false
	}
});

module.exports = function(opts) {
	var plugins = [
		new webpack.ProvidePlugin({
			React: "react"
		}),
		stylesPlugin,
		hotReloader,
		uglify
	];
	return plugins;
};
