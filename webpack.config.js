var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/app.js',
	],
	output: {
		path: path.join(__dirname,"/dist/"),
		filename: 'bundle.js',
		publicPath: "/static/",
	},
	resolve: {
		extensions: ['', '.js', '.scss', '.css'],
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.s?css$/,
				loader: "style!css!sass"
			},

			{
				test: /\.(jpg|png|jpeg|gif)$/,
				loader: "url?limit=8192"
			},
			{
				test: /\.(woff|svg|ttf|eot)/,
				loader: "file"
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('styles.css'), // css文件独立打包
	],

}