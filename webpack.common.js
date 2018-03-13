var path = require('path');

module.exports = {
    entry: './src/manifests.js',
    output: {
        filename: 'manifests.js',
        path: path.resolve(__dirname, 'docs'),
        library: 'manifests'
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['eslint-loader'],
                exclude: /node_modules/
            }
        ]
    }
}
