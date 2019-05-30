
const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader',
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  // plugins: [
  //   new CompressionPlugin(),
  //   new BrotliPlugin(),
  //   new BundleAnalyzerPlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production'),
  //     },
  //   }),
  //   new webpack.optimize.AggressiveMergingPlugin(),
  // ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  stats: {
    warnings: false,
  },
};
