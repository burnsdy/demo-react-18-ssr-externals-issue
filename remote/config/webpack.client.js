const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const HtmlWebPackPlugin = require("html-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    publicPath: "http://localhost:3001/client/",
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
