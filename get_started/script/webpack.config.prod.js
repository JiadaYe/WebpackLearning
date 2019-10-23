const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        main:'./src/index.js',

    },
    output: {
        path: path.resolve(process.cwd(),"dist"), //__dirname
        filename: "js/[name].[chunkHash:6].js"  //hash:num  chunkHash/hash
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader:'less-loader',
                        options:{

                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:[
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: 'images/[name].[ext]',
                    //         publicPath: "/"
                    //     }
                    // },
                    {

                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name: 'images/[name].[ext]',
                            publicPath: "/"
                        },
                    }
                ]

            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'webpack',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].[chunkHash:6].css',
        }),
        new CopyPlugin([
            { from: path.resolve(process.cwd(),'src/static/'),
                to: path.resolve(process.cwd(),'dist/static/'),
            },

        ]),

    ],
    devServer:{
        port:3000,
        open: true
    }
};