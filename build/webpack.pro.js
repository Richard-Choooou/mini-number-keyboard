const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const config = require('./config')
const ENV = process.argv.NODE_ENV

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        filename: 'keyboard.min.js',
        path: path.resolve(config.basePath, './dist'),
        publicPath: '/dist',
        libraryTarget: 'umd',
        library: 'MiniKeyboard',
        libraryExport: "default"
    },

    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}, 
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }
})

    
