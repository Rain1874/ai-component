/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangxy
 * @email: zhangxy@troy.cn
 * @Date: 2024-06-27 16:12:05
 * @LastEditors: zhangxy
 * @LastEditTime: 2024-06-27 16:12:33
 */
const path = require('path');
const compression = require('compression');
const express = require('express');

const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const ejs = require('ejs');
const indexRouter = require('./indexRouter');
const configProxy = require('./proxy');

app.use(compression());

app.use(function (req, res, next) {
  res.header({
    'Access-Control-Allow-Origin': req.header.origin || '*',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Access-Control-Allow-Headers':
      'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range',
    'Access-Control-Allow-Credentials': 'true',
  });
  next();
});

// 模板配置
// eslint-disable-next-line no-underscore-dangle
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../storybook-static'));

// 静态资源配置
app.use('/', express.static(path.join(__dirname, '../storybook-static')));

// api代理配置
Object.keys(configProxy.dev).forEach((item) => {
  app.use(item, createProxyMiddleware(configProxy.dev[item]));
});

// 路由配置
app.use('/', indexRouter);
// 监听端口
app.listen(configProxy.port);
