/**
 * Created by admin on 2017/8/5.
 */
import Base from './base'
import $ from '../utils'
import Models from '../models'

let TeacherModel = Models.admin.TeacherModel;
let CourseModel = Models.admin.CourseModel;

let TeacherAPI = new Base({
    model: TeacherModel
});


TeacherAPI.methods.create = function (req, res, next) {
    let query = req.body;
    let courseOptions = query.course.split(",")

    let promiseArr = [];

    courseOptions.forEach(el => {
        promiseArr.push(CourseModel.find({
                grade: el.slice(0, 2),
                course: el.slice(2)
            })
        )
    });
    Promise.all(promiseArr).then(values => {
        courseOptions = [];
        values.forEach(el=>{
            courseOptions.push(el._id);
        })
        query.course = courseOptions;
        TeacherModel.create(query).then((doc)=>{
            console.log(doc);
            $.result(res,doc);
        },(err)=>{
            console.log(err);
        })
    });
}
export default TeacherAPI.methods;

