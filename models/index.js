/**
 * Created by 郭泽伟 on 2017/7/31.
 */
import mongoose from 'mongoose'
import $ from '../utils'
import admin from './admin'
const dbname = process.env.NODE_ENV === 'test' ? $.config.testdb : $.config.db;

export default {
    connect: () => {
        mongoose.Promise = global.Promise;
        let options = {
            db: {native_parser: true},
            server: {poolSize: 5}
        };

        mongoose.connect(dbname, options).then(() => {
            console.log(`数据库连接成功`);
        }, (err) => {
            console.log(err);
            process.exit(1);        //终止当前进程并返回给定的 code。如果省略了 code，退出是会默认返回成功的状态码('success' code) 也就是 0：
                                    //参数1表示未捕获的致命异常
        });
    },
    admin
}