/* global process, __dirname */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

process.env.NODE_ENV = "production"

module.exports = {
	entry: './src/js/index.js',

	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist')
	},

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/js/'),
			components: path.resolve(__dirname, 'src/js/components/')
		},
		extensions: ['*', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),

		new UglifyJsPlugin(),

		new HtmlWebpackPlugin({
			template: 'index.ejs',
			title: 'Smart Mirror v1',
		}),

		new webpack.LoaderOptionsPlugin({
			options: {
				context: '/'
			}
		})
	]
}