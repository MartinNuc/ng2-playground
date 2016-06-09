var path = require('path');

module.exports = {
		entry: './index',
		resolve: {
				extensions: ['', '.ts', '.js', 'scss']
		},
		output: {
				path: path.join(__dirname, 'dist'),
				filename: "bundle.js"
		},
		module: {
				loaders: [
						{
								test: /\.ts$/,
								loader: 'ts-loader'
						},
						{
								test: /\.scss$/,
								exclude: /node_modules/,
								loader: 'raw-loader!sass-loader'
						}
				]
		}
};

