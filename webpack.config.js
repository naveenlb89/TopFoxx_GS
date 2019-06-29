// webpack build
const webpack = require("webpack");
const path = require('path');
const styles = "./styles";
const scripts = "./scripts";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: "development",
    entry: scripts + '/theme.js',
    output: {
        filename: 'theme.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    devServer: {
        contentBase: [path.join(__dirname, 'dist')],
        watchContentBase: true,
        stats: "errors-only",
        overlay: false,
        index: 'index.html'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: [
                    path.resolve(__dirname, styles)
                ],
                exclude: /\.(liquid)$/,
                use: [
                    {
                        loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader', options: { sourceMap: true }
                    },
                    {
                        //loader: 'postcss-loader', options: { sourceMap: true }
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-preset-env')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader', options: { sourceMap: true }
                    }]
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]'
                }
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new StyleLintPlugin({
            failOnError: false,
            defaultSeverity: "warning",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
