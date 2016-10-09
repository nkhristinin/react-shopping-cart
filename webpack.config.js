/**
 * Created by nkhristinin on 07.10.16.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		preLoaders: [ //добавили ESlint в preloaders
			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: [
					path.resolve(__dirname, "src"),
				],
			}
		],
		loaders: [
			{ test: /\.json$/, loader: 'json' },
			{
				loaders: ['react-hot', 'babel-loader'],
				include: [path.resolve(__dirname, "src")],
				test: /\.js$/,
				plugins: ['transform-runtime']
			}
		]
	}
};