const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    port: 3030,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          limit: false,
          name: "[name].[ext]",
          outputPath: "assets", // Specify the output directory for images
          publicPath: "assets", // Specify the public path for images
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-router': require.resolve('react-router')
    },
    extensions: ['.js', '.jsx']
  },
};
