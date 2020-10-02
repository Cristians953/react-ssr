const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.jsx"),
  mode: "development",
  devtool: "source-map",
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
      {
        enforce: "pre",
        test: /\.js(x?)$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              localsConvention: "camelCase",
              modules: {
                localIdentName: "[local]___[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot|svg)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx"],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    // }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
};
