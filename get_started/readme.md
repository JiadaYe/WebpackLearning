
Install the webpack and commandline
*   npm i webpack webpack-cli -D
add script in package.json
*   "build": "webpack --mode production --config script/webpack.config.js"
build up a webpack.config.js file
run build
*   npm run build

install html webpack plugin
*   npm i --save-dev html-webpack-plugin
*   add in webpack.config.js
```
    plugins: [
            new HtmlWebpackPlugin()
        ]
```

css loader
*   npm i --save-dev css-loader
*   npm i --save-dev style-loader

remain css files in dist
*  mini-css-extract-plugin
    *  npm i --save-dev mini-css-extract-plugin
    *    add const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```
    new MiniCssExtractPlugin({
                  // Options similar to the same options in webpackOptions.output
                  // both options are optional
                  filename: '[name].[chunkHash:6]css',
              })
```
    *   change 'style-loader' to MiniCssExtractPlugin.loader



local server
*npm i --save-dev webpack-dev-server *
*add into package.json  "dev": "webpack-dev-server --mode development --config script/webpack.config.js"*
*add into webpack.config.js*
```
 devServer:{
        port:3000,
        open: true
    }
```