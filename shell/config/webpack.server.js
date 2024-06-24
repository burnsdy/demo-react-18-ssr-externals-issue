const path = require("path");
const { merge } = require("webpack-merge");
const shared = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const nodeExternals = require("webpack-node-externals");

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: "server",
  target: false,
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src/server/index")],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    publicPath: "/",
    filename: "[name].js",
  },
  plugins: [...moduleFederationPlugin.server],
  externals: [nodeExternals()],
  stats: {
    colors: true,
  },
};

module.exports = merge(shared, webpackConfig);
