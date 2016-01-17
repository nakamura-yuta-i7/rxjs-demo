var webpack = require('webpack')

module.exports = {
	entry: './app.ts',
	output: {
		filename: 'app.js',
		path: __dirname + "/public",
	},
	progress: true,
	
	// ファイル名解決のための設定
	resolve: {
		// .coffee, .ts などを省略できるようにする
		extensions: ['', '.coffee', '.webpack.js', '.web.js', '.js'],
		modulesDirectories: ['node_modules', 'bower_components'],
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
			{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
		]
	},
	// お便利プラグイン
	plugins: [
		// bowerのモジュールを読めるようにするために
		new webpack.ResolverPlugin([
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		]),
		// 指定のモジュールを予めグローバル変数としておく
		new webpack.ProvidePlugin({
			$: 'jquery',
			_: 'underscore',
			Rx: 'rx'
		})
	]
}
