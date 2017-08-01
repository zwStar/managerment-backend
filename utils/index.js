/**
 * Created by 郭泽伟 on 2017/7/31.
 */
import config from './config'
import joi from 'joi'
import md5 from 'blueimp-md5'
import jwt from 'jsonwebtoken'

module.exports.config    = config;
module.exports.md5 = str=>md5(str);
module.exports.paramter = joi;

module.exports.createToken =  (email) =>{ //创建Token
    const token = jwt.sign({
            email
        },
        config.secret, {
            expiresIn: '10s' // 过期时间 这里只设置10s
        });
    console.log(token);
    return token;
};

function result(res, data, msg, status) {
    let redata = {};
    if (typeof data === 'string' ||
        data === 'null' ||
        data === undefined ||
        data === null || msg) {
        status = status || 400;
        redata = {
            msg: data,
        };
    } else {
        status = status || 200;
        redata = data;
    }
    res.status(status).send(redata);
};


//用于返回到前端结果函数
module.exports.result = result;

module.exports.checkToken = function (req, res, next) { //从请求cookie中 检查token的状态信息
    let re = /Admin-Token=(.+)/;
    let token = req.headers.cookie.match(re)[1];    //从cookie中提取出token
    console.log(token);
    let decoded = jwt.verify(token, 'secret', function (err, decoded) { //token解析
        if (err) {
            console.log(err);
            if (err.message === "jwt expored") {
                return result(res, {success:false, msg:'token过期，请重新登录'});
            }
            return result(res, {error: "登录信息有误"});
        }

        return result(res, {success:true, msg:'token 正确'});
        //console.log(decoded)；     //获取信息 进行下一步操作
        //next();
    });
};