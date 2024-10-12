const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    devServer: {
      static: './dist',
      port: 9000,
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name].[contenthash][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
      }),
      new webpack.DefinePlugin({
        API_PATH: JSON.stringify(process.env.API_PATH),
      }),
    ],
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@api': path.resolve(__dirname, 'src', 'api'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@utils': path.resolve(__dirname, 'src', 'utils'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@constants': path.resolve(__dirname, 'src', 'constants'),
        '@sass': path.resolve(__dirname, 'src', 'sass'),
        '@modules': path.resolve(__dirname, 'src', 'modules'),
        '@node_modules': path.resolve(__dirname, 'node_modules'),
      },
      extensions: ['', '.js', '.jsx', '.scss'],
    },
  };
};
