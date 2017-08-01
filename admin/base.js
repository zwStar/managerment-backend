/**
 * Created by 郭泽伟 on 2017/7/31.
 */
export default class Base{
    constructor(options){
        this.model   = options.model || {};
        this.search  = options.search || {};
        this.methods = addMethods(this);
    }

}
function addMethods(_this){
    let methods = {};
    return methods;
}