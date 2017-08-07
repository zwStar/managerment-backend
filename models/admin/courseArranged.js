/**
 * Created by admin on 2017/8/7.
 */
import Base from '../base'

const courseArranged = new Base("CourseArranged",{
    // workNumber: {type:Base.ObjectId(),ref:'Teacher'},  //可教课程 },      //入职时间
    // sno:{type:Base.ObjectId(),ref:'Student'},
    // courseNo:{type:Base.ObjectId(),ref:"Course"},
    // startTime:{ type: Date},
    // endTime:{type:Date},
    // courseNumber:String,
    // courseHour:Number
    workNumber: String,  //可教课程 },      //入职时间
    sno:String,
    courseNo:String,
    startTime:{ type: Date},
    endTime:{type:Date},
    courseNumber:String,
    courseHour:Number
})

export default courseArranged.methods;