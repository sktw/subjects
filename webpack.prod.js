var webpack = require('webpack');
var merge = require('webpack-merge');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'none',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
