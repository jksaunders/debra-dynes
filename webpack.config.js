// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pages = require('./page-structure');

module.exports = env => ({
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'styled-components': path.resolve(
        __dirname,
        'node_modules',
        'styled-components'
      ),
      '@design': path.resolve(__dirname, 'src/design'),
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 9101,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.rootLocation': env ? `"/${env.rootLocation}"` : '""',
    }),
    ...pages().map(
      p =>
        new HtmlWebpackPlugin({
          env: env || {},
          filename: `${p.filename}.html`,
          title: p.title,
          description: p.description,
          template: 'index.html',
        })
    ),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules|bonfire/,
        loader: 'eslint-loader',
        options: {
          emitWarnings: true,
          configFile: './.eslintrc',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
});
