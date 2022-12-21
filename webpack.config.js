const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const rules = [
  {
    test: /\.((c|sa|sc)ss)$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              [
                "postcss-preset-env",
                {
                  // Options
                },
              ],
            ],
          },
        },
      },
      {
        loader: "sass-loader",
      },
    ],
  },
  {
    test: /\.m?js(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        // cacheDirectory: "false",
      },
    },
  },
  {
    test: /\.ts(x?)$/,
    use: "ts-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.(html)$/,
    use: "html-loader",
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
    type: mode =  "development", // В продакшен режиме
    // изображения размером до 8кб будут инлайнится в код
    // В режиме разработки все изображения будут помещаться в build/assets
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: "asset/resource",
  },
];

module.exports = () => {
  return {
    mode,
    plugins:[
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    entry: "./src/index.js",
    module: { rules },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
      alias: {
        "@modules": path.resolve(__dirname, "src/modules"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@API": path.resolve(__dirname, "src/api"),
        "@store": path.resolve(__dirname, "src/store"),
        "@icons": path.resolve(__dirname, "src/images/icons"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@portals": path.resolve(__dirname,"src/portals/*")
      },
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
      assetModuleFilename: "assets/[name][hash][ext]",
    },
    devServer: {
      https:true,
      port:8080,
      hot: true,
      historyApiFallback: true,
    },
    devtool: "inline-source-map",
  };
};

