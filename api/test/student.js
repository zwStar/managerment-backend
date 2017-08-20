/**
 * Created by 郭泽伟 on 2017/8/8.
 */
import Model from '../../models'
import $ from '../../utils'

const {StudentModel} =Model.admin;

export default {
    findGrade:(req,res,next)=>{
        let query = req.query;
        let findGradePromise = StudentModel.find({sno:query.sno});
        findGradePromise.then((doc)=>{
            console.log("api test student.js")
            console.log(doc)
            $.result(res,{grade:doc.grade});
        },(err)=>{
            console.log(err);
        })
    }
}