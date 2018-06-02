const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
	entry: './main.js',
  output: {
		filename: 'bundle.js',
    publicPath: '/'
  },
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?cacheDirectory',
				},
			},
    ]
  },
	plugins: [
		new VueLoaderPlugin(),
  ]
}
