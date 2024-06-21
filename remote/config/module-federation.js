const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const { UniversalFederationPlugin } = require("@module-federation/node");

module.exports = {
  client: new ModuleFederationPlugin({
    name: "remote",
    filename: "remoteEntry.js",
    exposes: {
      "./Content": "./src/Content",
    },
    shared: {
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      remoteType: "script",
      name: "remote",
      filename: "remoteEntry.js",
      library: { type: "commonjs-module" },
      isServer: true,
      exposes: {
        "./Content": "./src/Content",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
