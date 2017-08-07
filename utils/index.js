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

function createToken(name){
    const token = jwt.sign({
            name
        },
        config.secret, {
            expiresIn: '1h' // 过期时间 这里只设置10s
        });
    return token;
}
module.exports.createToken =  createToken;      //创建token

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
    let decoded = jwt.verify(token, config.secret, function (err, decoded) { //token解析
        if (err) {
            console.log(err);
            if (err.message === "jwt expored") {
                return result(res, {success:false, msg:'token过期，请重新登录'});
            }
            return result(res, {error: "登录信息有误"});
        }else{
            console.log(decoded)
            req.user = decoded.name;
            next();
        }
    });
};