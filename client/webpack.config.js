const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/dist',
		hot: true
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(scss|sass|css)$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: false,
							sourceMap: true
						}
					},

					'sass-loader'
				]
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: [
					'file-loader?name=[name].[ext]'
				] // ?name=[name].[ext] is only necessary to preserve the original file name
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
			inject: true
		}),
		new MiniCssExtractPlugin()
	]
};

module.exports = config;
