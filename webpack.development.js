/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        PuiApp: './src/PuixApp.ts',
    },
    output: {
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.development.json',
                    transpileOnly: true,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './assets/www/development.html' }),
    ],
};
