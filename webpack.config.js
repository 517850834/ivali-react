const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        name: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url?limit=8192'
            }
        ]
    }
};