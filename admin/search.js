/**
 * Created by 郭泽伟 on 2017/8/16.
 */
import Models from '../models'
import $ from '../utils'

export default function (req, res, next) {

    let  query = {};
    query[req.query.searchKey] =  { $regex: req.query.searchVal, $options: 'i' }; //$regex 正则部分  i是全局匹配

    const model = Models.admin[`${req.query.model}Model`];

    if ($.isEmpty(model)) {return $.result(res, 'error');}
    const searchPrimose = model.find(query);
    searchPrimose.then((docs)=>{
        $.result(res, docs);
    },(err)=>{
        console.log(err);
    })

}