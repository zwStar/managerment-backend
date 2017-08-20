/**
 * Created by admin on 2017/8/7.
 */
import Base from '../base'

const courseArranged = new Base("CourseArranged",{
    workNumber: String,  //工号
    sno:String,         //学号
    courseNo:String,    //课程号
    startTime:{ type: Date},    //开始时间
    endTime:{type:Date},        //结束时间
    courseNumber:String,        //课程号
    courseHour:Number           //课程时长
});

export default courseArranged.model;