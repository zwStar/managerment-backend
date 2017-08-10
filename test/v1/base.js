/**
 * Created by 郭泽伟 on 2017/8/8.
 */
import {request,api} from '../tools'

export default class Base {
    constructor(options) {
        addMethods(this);
        Object.keys(options).forEach(el => this[el] = options[el]);
    }
}

const addMethods = (_this) => {
    _this._get = (url,reqDate,statusCode,done)=>{
        console.log(`${api}${url}`)
        request.get(`${api}${url}`).query(reqDate).then((res)=>{
          console.log(res.statusCode)
            res.statusCode.should.equal(statusCode)
            console.log("v1 base result")
            done();
        }).catch(e=>{
            console.log(e);
        })
    }
}