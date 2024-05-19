const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },

  devServer: {
    // stats: "minimal",
    // overlay: true,
    client: {
      logging: "info",
      overlay: true,
    },
    historyApiFallback: true,
    // disableHostCheck: true,
    allowedHosts: "all",
    headers: { "Access-Control-Allow-Origin": "*" },
    // https: false,
    server: {
      type: "http",
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"], //webpack will watch our files and run ESLint when we hit save
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
