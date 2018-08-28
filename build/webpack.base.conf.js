'use strict'
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
//vux配置
const vuxLoader = require('vux-loader')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = { // 原来的 module.exports 代码赋值给变量 webpackConfig
  entry: {
    'babel-polyfill': 'babel-polyfill',
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.less', '.css', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'images': resolve('src/assets')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.less$/,
      //   // use: ExtractTextPlugin.extract({ //分离less编译后的css文件
      //   //   fallback: 'style-loader',
      //   //   use: ['css-loader', 'less-loader']
      //   // }),
      //   use: ['style-loader', 'css-loader', 'postcss-loader','less-loader'], // 编译顺序从右往左
      //   exclude: /node_modules/
      // }
    ]
  }
}
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
