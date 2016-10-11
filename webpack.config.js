'use strict';

module.exports = {
	devtool: 'source-map',
	entry: {
		array: './examples/array/main.js',
		class: './examples/class/main.js',
	},
	output: {
		path: __dirname,
		filename: '[name]/bundle.js',
		publicPath: 'examples/',
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
			}
		]
	},
	devServer: {
		historyApiFallback: './index.html',
		host: 'localhost',
		port: 8712,
	},
};
