import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";
import env from "dotenv";
import GoogleFontsPlugin from "google-fonts-plugin";

//PostCss plugins
import purgecss from "@fullhuman/postcss-purgecss";
import postcssPresetEnv from "postcss-preset-env";
import cssNano from "cssnano";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import atImport from "postcss-import";
// @ts-ignore
import purgefonts from "postcss-purgefonts";

env.config();

const pathDist = path.resolve(__dirname, "dist");
const pathPublic = path.resolve(__dirname, "public");
const pathSource = path.resolve(__dirname, "src");
const pathModules = path.resolve(__dirname, "node_modules");
const pathTsConfig = path.resolve(__dirname, "tsconfig.json");

const isProd = process.env.NODE_ENV === "production";

const postcssConfig = (isProd: boolean) => ({
  ident: "postcss",
  plugins: [
    atImport(),
    postcssPresetEnv(),
    tailwind(),
    autoprefixer(),
    isProd && cssNano({
      preset: "default",
    }),
    isProd && purgecss({
      content: [
        "./src/**/*.html",
        "./src/**/*.ts",
        "./src/**/*.tsx",
        "./public/index.html",
      ],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) ||
          [];
        return broadMatches.concat(innerMatches);
      },
      fontFace: true,
      safelist: ["html", "body"],
    }),
    isProd && purgefonts({
      to: path.join(pathDist, "fonts"),
    }),
  ].filter(Boolean),
});

const result: webpack.Configuration = {
  context: pathSource,
  entry: "./index.tsx",
  devtool: isProd ? "source-map" : "eval",
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".pcss", ".scss", ".css"],
    modules: [pathModules, pathSource],
  },
  output: {
    path: pathDist,
    filename: "bundle.[hash].js",
  },
  devServer: {
    contentBase: pathPublic,
    compress: true,
    historyApiFallback: true,
    // @ts-ignore
    port: process.env.DEV_SERVER_PORT,
    stats: {
      children: false,
      modules: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  "regenerator": true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.pcss$/,
        exclude: /node_modules/,
        // @ts-ignore
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          !isProd && "resolve-url-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: postcssConfig(isProd),
            },
          },
        ].filter(Boolean),
      },
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // @ts-ignore
    new Dotenv({ systemvars: true, silent: true }),
    // @ts-ignore
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./**/*.{ts,tsx,js,jsx}",
      },
      typescript: {
        configFile: pathTsConfig,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(pathPublic, "index.html"),
    }),
    new GoogleFontsPlugin({
      fonts: [
        {
          family: "Roboto",
          variants: ["400"],
        },
        {
          family: "Noto Sans",
          variants: ["400"],
        },
      ],
      formats: ["woff"],
      encode: true,
      cache: true,
    }),
  ],
};

export default result;
