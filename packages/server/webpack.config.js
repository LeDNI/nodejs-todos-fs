var webpack = require('webpack');
const path = require("path")
var dotenv = require('dotenv').config({path: path.resolve(__dirname, '../../config.env')});

var config = {
mode: process.env.NODE_ENV || "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(dotenv.parsed || {})),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  stats: {
    errorDetails: true,
    logging: 'verbose',
  },
  target: "node"
};

if(process.env.NODE_ENV === "development") {
  config.devtool = "hidden-source-map";
}
  
module.exports = config;
