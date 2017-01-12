const webpack = require('webpack');

exports.devServer = function(options) {
	return {
		devServer: {
			historyApiFallback: true,
			inline: true,
			hot: true,
			stats: 'errors-only',
			host: options.host,
			port: options.port
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		]
	};
}

exports.babelLoader = function() {
	return {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel'
				},
			]
		}
	};
}

exports.cssLoader = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					loaders: [
						'style-loader',
						'css-loader',
					],
					include: paths
				}
			]
		}
	};
}