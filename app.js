/**
 * Created by 郭泽伟 on 2017/7/31.
 */
import express        from 'express';     //引入express
import bodyParser from 'body-parser';

import routers from './routers'     //路由
import models from './models'
import $ from './utils'             //工具方法

const  app            = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//设置跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin',      $.config.allowOrigin);
    res.header('Access-Control-Allow-Methods',     'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers',     'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/user',routers.admin);    //请求路由
app.use('/course',routers.course);  //课程相关操作路由
//连接mongo数据库
models.connect();

console.log('===================================');
console.log('Token-backend SERVICES START AT');
console.log('====================================');
export default app;
