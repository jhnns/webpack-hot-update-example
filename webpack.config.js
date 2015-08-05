
var
    webpack = require('webpack');


module.exports = {
    entry: './src/style.css',
    output: {
        path: './static/assets/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
