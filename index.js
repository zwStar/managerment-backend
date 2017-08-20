/**
 * Created by 郭泽伟 on 2017/7/31.
 */
require('babel-core/register');
require("babel-polyfill");

const app    = require('./app').default;

app.listen(3000);   //监听3000端口

module.exports = app;
