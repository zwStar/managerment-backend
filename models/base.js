/**
 * Created by 郭泽伟 on 2017/7/31.
 */
import mongoose from 'mongoose'
import $ from '../utils'
export default class Base{
    constructor(name,options){
        const schema = new mongoose.Schema(options, {
            versionKey: false,
            toObject: {virtuals: true},
            toJSON: {virtuals: true},
        });
        this.model = mongoose.model(name, schema);

        schema.virtual('date').get(function (doc) {
            return $.dateformat(this.sendAt);
        });
    }

    static ObjectId(){
        return mongoose.Schema.ObjectId;
    }

}