const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/server.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/env",
                { targets: "> 0.25%", corejs: 3, useBuiltIns: "usage" },
              ],
              "@babel/preset-react",
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
};
