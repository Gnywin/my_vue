'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	APP_NAME:'"有道咨询"',
  NODE_ENV: '"development"',
  API_ROOT: '"http://api.yoyoqianbao.com/api"',//接口地址的公共部分
  // API_ROOT: '"http://192.168.82.15:8061/api"',//接口地址的公共部分
  domain:'"http://localhost:8081/"'
})

