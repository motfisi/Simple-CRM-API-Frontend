const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
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
      }),
    ],
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@api': path.resolve(__dirname, 'src', 'api'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@constants': path.resolve(__dirname, 'src', 'constants'),
        '@sass': path.resolve(__dirname, 'src', 'sass'),
        '@modules': path.resolve(__dirname, 'src', 'modules'),
        '@node_modules': path.resolve(__dirname, 'node_modules'),
      },
      extensions: ['', '.js', '.jsx'],
    },
  };
};
