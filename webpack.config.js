const path = require('path');
module.exports = {
    entry: {
        main:'./src/index.js',
        about:'./src/about.js'
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[chunkHash:6].js"  //hash:num  chunkHash/hash
    }
};