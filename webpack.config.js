const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.tsx",
    },
    output: {
        path: path.resolve('./dist'),
        filename: "[name].bundle.js",
        publicPath: '/'
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'. This help to debug our code
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // All files with a '.css' extension will be handled by 'css-loader'.
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'url-loader?limit=100000'
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({ 
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks 
        new CompressionPlugin({   
            filename: "[path].gz[query]",
            test: /\.js$|\.css$|\.html$/,
        })
    ]
};