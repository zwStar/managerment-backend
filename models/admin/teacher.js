/**
 * Created by admin on 2017/8/5.
 */

import Base from '../base'


let Teacher = new Base("Teacher",{
    workNumber:{ type:String },         //工号
    name:{ type:String },               //姓名
    age:{ type: Number },               //年龄
    sex:{ type:String },                //性别
    inductionDate: { type: Date, default: Date.now },      //入职时间
    tel:String,
    unpaidTime:{ type:Number },         //还没支付课时
    paidTime:{ type:Number },           //已经支付课时
    password:{ type:String },           //密码
    course:[{type:Base.ObjectId(),ref:'Course'}]    //可教课程
});

export default Teacher.model;
