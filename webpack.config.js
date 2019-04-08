var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./js/app.js",
  output: {
    path: `${__dirname}/js/`,
    filename: "out.js"
  },
  watch: true,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        }
      }
    ]
  }
};
