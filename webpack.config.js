const path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		"./src/bootstrap.jsx",
		"./style.css"
	],
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js"
	},
	resolve: {
  		extensions: ['', '.js', '.jsx', '.ts']
		},
	module: {
		loaders: [
	        { test: /\.json$/, loader: 'json' },
	        { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
	        { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
		]
	}
}
