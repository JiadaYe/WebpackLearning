const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        main:'./src/index.js',
        about:'./src/about.js'
    },
    output: {
        path: path.resolve(process.cwd(),"dist"), //__dirname
        filename: "[name].[chunkHash:6].js"  //hash:num  chunkHash/hash
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'webpack',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[chunkHash:6]css',
        })

    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader'],
            },
        ],
    }
};