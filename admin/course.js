/**
 * Created by admin on 2017/8/5.
 */
import Model from '../models'
import $ from '../utils'
import Base from './base'

let CourseModel = Model.admin.CourseModel;          //课程表
let TeacherModel = Model.admin.TeacherModel         //教师表
let CourseArrangedModel = Model.admin.CourseArrangedModel;  //课程安排表
let CourseAPI = new Base({
    model: CourseModel
});
//筛选出能教课的老师
CourseAPI.methods.teacherOptions = function (req, res, next) {
    let query = req.query;
    let FindCourseNoPromise = CourseModel.find({course: query.course, grade: query.grade});  //找出课程号
    FindCourseNoPromise.then((results) => {
        if (results != null) {
            TeacherModel.find({})
                .populate({
                    path: 'course',
                    match: {_id: '5985666e5b81ff123070bd36'},
                    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
                    // options: { limit: 5 }
                    // select: 'workNumber -_id',   //这里是select Course表中的内容
                }).then((res) => {
                console.log("查找到的老师");
                console.log(res);
            })
        } else {
            $.result(res, {success: false, message: "课程号有误"});
        }
    }, (error) => {
        console.log(error);
    })
};

//课程安排
CourseAPI.methods.courseArranged = function (req,res,next) {
    let query = req.query;
    let Promise = CourseArrangedModel.create(query);
    Promise.then((results)=>{
        console.log(results);
    },(err)=>{

    })
}


export default CourseAPI.methods;


/*忽略下面的课程添加程序*/

// CourseAPI.methods.createCourse=()=>{
//     let data = [
/**********小学*******/
// {courseNo:"0101",grade:"一年级",course:"语文"},
// {courseNo:"0102",grade:"一年级",course:"数学"},
// {courseNo:"0103",grade:"一年级",course:"英语"},
//
// {courseNo:"0201",grade:"二年级",course:"语文"},
// {courseNo:"0202",grade:"二年级",course:"数学"},
// {courseNo:"0203",grade:"二年级",course:"英语"},
//
// {courseNo:"0301",grade:"三年级",course:"语文"},
// {courseNo:"0302",grade:"三年级",course:"数学"},
// {courseNo:"0303",grade:"三年级",course:"英语"},
//
// {courseNo:"0401",grade:"四年级",course:"语文"},
// {courseNo:"0402",grade:"四年级",course:"数学"},
// {courseNo:"0403",grade:"四年级",course:"英语"},
//
// {courseNo:"0501",grade:"五年级",course:"语文"},
// {courseNo:"0502",grade:"五年级",course:"数学"},
// {courseNo:"0503",grade:"五年级",course:"英语"},
//
// {courseNo:"0601",grade:"六年级",course:"语文"},
// {courseNo:"0602",grade:"六年级",course:"数学"},
// {courseNo:"0603",grade:"六年级",course:"英语"}
/**********小学*******/

/**********初中**********/
//         {courseNo:"0701",grade:"初一",course:"语文"},
//         {courseNo:"0702",grade:"初一",course:"数学"},
//         {courseNo:"0703",grade:"初一",course:"英语"},
//         {courseNo:"0704",grade:"初一",course:"历史"},
//         {courseNo:"0705",grade:"初一",course:"地理"},
//         {courseNo:"0706",grade:"初一",course:"生物"},
//         {courseNo:"0707",grade:"初一",course:"政治"},
//
//         {courseNo:"0801",grade:"初二",course:"语文"},
//         {courseNo:"0802",grade:"初二",course:"数学"},
//         {courseNo:"0803",grade:"初二",course:"英语"},
//         {courseNo:"0804",grade:"初二",course:"历史"},
//         {courseNo:"0805",grade:"初二",course:"地理"},
//         {courseNo:"0806",grade:"初二",course:"生物"},
//         {courseNo:"0807",grade:"初二",course:"政治"},
//         {courseNo:"0808",grade:"初二",course:"物理"},
//
//         {courseNo:"0901",grade:"初三",course:"语文"},
//         {courseNo:"0902",grade:"初三",course:"数学"},
//         {courseNo:"0903",grade:"初三",course:"英语"},
//         {courseNo:"0904",grade:"初三",course:"历史"},
//         {courseNo:"0905",grade:"初三",course:"地理"},
//         {courseNo:"0906",grade:"初三",course:"生物"},
//         {courseNo:"0907",grade:"初三",course:"政治"},
//         {courseNo:"0908",grade:"初三",course:"物理"},
//         {courseNo:"0909",grade:"初三",course:"化学"},
//         /**********初中**********/
//
//         /*********高中*************/
//         {courseNo:"1001",grade:"高一",course:"语文"},
//         {courseNo:"1002",grade:"高一",course:"数学"},
//         {courseNo:"1003",grade:"高一",course:"英语"},
//         {courseNo:"1004",grade:"高一",course:"历史"},
//         {courseNo:"1005",grade:"高一",course:"地理"},
//         {courseNo:"1006",grade:"高一",course:"生物"},
//         {courseNo:"1007",grade:"高一",course:"政治"},
//         {courseNo:"1008",grade:"高一",course:"物理"},
//         {courseNo:"1009",grade:"高一",course:"化学"},
//
//         {courseNo:"1101",grade:"高二",course:"语文"},
//         {courseNo:"1102",grade:"高二",course:"数学"},
//         {courseNo:"1103",grade:"高二",course:"英语"},
//         {courseNo:"1104",grade:"高二",course:"历史"},
//         {courseNo:"1105",grade:"高二",course:"地理"},
//         {courseNo:"1106",grade:"高二",course:"生物"},
//         {courseNo:"1107",grade:"高二",course:"政治"},
//         {courseNo:"1108",grade:"高二",course:"物理"},
//         {courseNo:"1109",grade:"高二",course:"化学"},
//
//         {courseNo:"1201",grade:"高三",course:"语文"},
//         {courseNo:"1202",grade:"高三",course:"数学"},
//         {courseNo:"1203",grade:"高三",course:"英语"},
//         {courseNo:"1204",grade:"高三",course:"历史"},
//         {courseNo:"1205",grade:"高三",course:"地理"},
//         {courseNo:"1206",grade:"高三",course:"生物"},
//         {courseNo:"1207",grade:"高三",course:"政治"},
//         {courseNo:"1208",grade:"高三",course:"物理"},
//         {courseNo:"1209",grade:"高三",course:"化学"},
//         /*********高中*************/
//     ]
//
//     for(let i=0;i<data.length;i++){
//         CourseModel.create(data[i]).then((results)=>{
//             console.log(results);
//         },(err)=>{
//             console.log(err);
//         });
//     }
// }


