const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3025/",
  },
  devServer: {
    port: 3025,
    historyApiFallback: {
      index: "index.html",
    },
    hot: false,
    liveReload: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "admin",
      filename: "remoteEntry.js",
      exposes: {
        "./AdminApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
