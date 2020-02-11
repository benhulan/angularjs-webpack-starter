const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'tslint-loader',
                    options: {
                        emitErrors: true
                    }
                },
                enforce: 'pre'
            },

            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: [
                    'ng-annotate-loader',
                    'awesome-typescript-loader'
                ]
            },

            {
                test: /\.css|.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ],
            },

            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                 'file-loader',
               ],
            },

            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Alamo - Find a Movie',
            template: path.resolve(__dirname, 'src/public/', 'index.html'),
            filename: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
              tslint: {
                configuration: require('./tslint.json'),
                typeCheck: true
              }
            }
        }),
        new MiniCssExtractPlugin({
          filename: 'css/style.css'
        }),
        new CopyWebpackPlugin([{from: 'public'}])
    ],

    entry: './index.ts'
};
