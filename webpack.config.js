const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin')
/** manifest用于输出文件对应的映射关系 */
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // true

  return {
    mode: 'development',
    // mode: 'production',

    // entry: './src/index.js',
    entry: {
      index: './src/index.ts',
      print: './src/print.js'
    },
    plugins: [
      new WebpackManifestPlugin({}),
      new HtmlWebpackPlugin({
        // title: '管理输出'
        title: 'Development'
      }),
      // 在external使用后自动shimming预置模块引入
      new webpack.ProvidePlugin({
        _: 'lodash'
      }),
      new WorkboxPlugin.GenerateSW({
        // 这些选项帮助快速启用 ServiceWorkers
        // 不允许遗留任何“旧的” ServiceWorkers
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: './',
      library: {
        name: 'component',
        type: 'umd'
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(tsx|ts)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
  }
};