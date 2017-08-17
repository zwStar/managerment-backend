/**
 * Created by 郭泽伟 on 2017/7/31.
 */
import $ from '../utils'
export default class Base {
    constructor(options) {
        this.model = options.model || {};
        this.search = options.search || {};
        this.methods = addMethods(this);
    }

}
function addMethods(_this) {
    let methods = {};
    methods.create = function (req, res, next) {
        let params = req.method === 'POST' ? req.body : req.query;
        console.log(params)

        // let params = {
        //     workNumber: '201541404239',
        //     sex: '男',
        //     name: '苏枫泳',
        //     tel: '17727705182',
        //     inductionDate: 'Sat Aug 05 2017 15:50:17 GMT+0800 (中国标准时间)',
        //     unpaidTime: '30',
        //     paidTime: '20',
        //     password: 'adgjmp123',
        //     course: ['5985666e5b81ff123070bd36', '5985666e5b81ff123070bd35'],
        //     age: '18'
        // }

        // let params = { workNumber: '201541404213',
        //     name: '温文杰',
        //     age: '20',
        //     sex: '男',
        //     tel: '13553715457',
        //     unpaidTime: '20',
        //     paidTime: '20',
        //     password: '123456',
        //     course: ['59856467376745135058757d'] }

        let createPromise = _this.model.create(params)
        createPromise.then((results) => {
            $.result(res, {success: true, message: "添加成功！"});
        },(error)=>{
            console.log(error);
        })
    }

    methods.all = function (req,res,next) {
        let allInfoPromise = _this.model.all();
        allInfoPromise.then((docs)=>{
            console.log(docs);
            $.result(res,docs);
        },(err)=>{
            console.log(err);
        })
    }
    return methods;
}