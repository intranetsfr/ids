const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    intranets: "./src/js/index.js",
    styles: "./src/scss/intranets-design-system.scss",
  },

  output: {
    filename: "[name]-ds.min.js",
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/public/js/",
  },

  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../css/",
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer"), require("cssnano")],
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/intranets-ds.min.css",
    }),
  ],

  devtool: "source-map",

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
