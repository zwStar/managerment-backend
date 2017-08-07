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

    static ObjectId(){
        return mongoose.Schema.ObjectId;
    }

    create(query) {
        try {
            return this.model.create(query);//创建用户
        } catch (e) {
            console.error(e);
        }
    }

    find(query, options) {
        try {
            return this.model.findOne(query)
        } catch (e) {
            console.error(e);
        }
    };

    update(query,info){
        try{
            return this.model.update(query,{$set:info});
        }catch (e){
            console.error(e);
        }
    }
}

function addMethods(_this) {
    let methods = {};

    methods.find = function (query) {
        return _this.find(query);
    };

    methods.update = function (query,info) {
        return _this.update(query,info);
    }

    methods.create = function(query){
        return _this.create(query);
    }

    return methods;

}