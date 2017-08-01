/**
 * Created by 郭泽伟 on 2017/7/31.
 */
import mongoose from 'mongoose'

export default class Base{
    constructor(name,options){
        const schema = new mongoose.Schema(options, {
            versionKey: false,
            toObject: {virtuals: true},
            toJSON: {virtuals: true},
        });
        this.model = mongoose.model(name, schema);
        this.methods = addMethods(this);
    }
    create(query) {
        try {
            return this.model.create(query);//创建用户
        } catch (e) {
            console.error(e);
        }
    }

    find(query, options) {
        mongoose.Promise = global.Promise;
        try {
            return this.model.findOne(query)
        } catch (e) {
            console.error(e);
        }
    };
}

function addMethods(_this) {
    let methods = {};

    methods.create = function (query) {
        return _this.create(query);
    };

    methods.find = function (query) {
        return _this.find(query);
    };
    return methods;

}