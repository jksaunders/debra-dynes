const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules", "react"),
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
    }
  },
  devServer: {
    contentBase: "./dist",
    port: 9101
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Debra Dynes Family House",
      template: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules|bonfire/,
        loader: "eslint-loader",
        options: {
          emitWarnings: true,
          configFile: "./.eslintrc"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
});