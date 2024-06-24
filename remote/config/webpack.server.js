const path = require("path");
const { merge } = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: "server",
  target: false,
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "[name].js",
    libraryTarget: "commonjs-module",
  },
  externals: ["react", "react-dom"],
  plugins: [...moduleFederationPlugin.server],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
