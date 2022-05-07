const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

// const TerserPlugin = require('terser-webpack-plugin')

const PORT = 3000
const DOMAIN = 'https://demo-ad-mono.vercel.app/'

module.exports = {
	entry: [path.resolve('src/bootstrap.tsx')],
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: path.resolve('build'),
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: './container/build/',
		crossOriginLoading: 'anonymous',
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './public/assets'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.ts?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /\.module.(scss)$/,
				use: ['css-loader', 'sass-loader'],
			},
			{
				test: /\.module\.scss$/i,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								mode: 'local',
								localIdentName: 'vv-[local]-[hash:base64:5]',
							},
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: './images/[name].[ext]',
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './svg/[name].[ext]',
						},
					},
				],
			},
			{
				type: 'javascript/auto',
				test: /\.json$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './json/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './fonts/[name].[ext]',
						},
					},
				],
			},
		],
	},
	devServer: {
		open: false,
		hot: true,
		historyApiFallback: true,
		port: PORT,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				Products: 'Products@https://ad-mono.vinlt.xyz/static/demo/products/dist/products.js',
				Header: 'Header@https://ad-mono.vinlt.xyz/demo-project/header/build/header.js',
				// sidebar: 'sidebar@' + DOMAIN + 'sidebar/build/sidebar.js',
				// header: 'header@' + DOMAIN + 'header/build/header.js',
				// login: 'login@' + DOMAIN + 'login/build/login.js',
			},
		}),
		new HTMLWebpackPlugin({
			template: path.resolve('public/index.html'),
			filename: path.resolve('../index.html'),
			chunksSortMode: 'none',
		}),
	],
}
