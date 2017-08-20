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
        let createPromise = _this.model.create(params);
        createPromise.then((results) => {
            $.result(res, {success: true, message: "添加成功！"});
        }, (error) => {
            console.log(error);
        })
    };

    methods.all = function (req, res, next) {
        let allInfoPromise = _this.model.find({});
        allInfoPromise.then((docs) => {
            console.log(docs);
            $.result(res, docs);
        }, (err) => {
            console.log(err);
        })
    };
    return methods;
}