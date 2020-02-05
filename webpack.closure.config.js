/* eslint-disable */
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        PuixApp: './ts/PuixApp.js',
    },
    optimization: {
        concatenateModules: false,
        minimizer: [
            new ClosurePlugin({
                // platform: 'javascript',
                mode: 'AGGRESSIVE_BUNDLE', // 'STANDARD', // 'AGGRESSIVE_BUNDLE',
            }, {
                languageOut: 'ECMASCRIPT_2015',
                renaming: true
                // debug: true,
                // formatting: 'PRETTY_PRINT',
            }),
        ],
    },
    plugins: [
        new CompressionPlugin(),
    ],
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'closure'),
    },
};
