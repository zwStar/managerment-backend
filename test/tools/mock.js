/**
 * Created by 郭泽伟 on 2017/8/8.
 */
import Models from '../../models'
import Mock from 'mockjs'
const M = Models.admin;

const methods = {
    create_student :()=>{
        return M.StudentModel.create({
            sno:Mock.mock('@string("number", 5)'),
            name:Mock.mock('@cname'),
            parentName:Mock.mock('@cname'),
            tel:Mock.mock('@string("number", 5)'),
            school:Mock.mock('@cname') + "中学",
            managerTeacher:Mock.mock('@cname'),
            grade: ["初一","高一"]
        })
    },
    create_user : ()=>{
        return M.UserModel.create({
            email:Mock.mock('@string("number", 7)'),
            password:Mock.mock('@string("number", 7)')
        })
    }
}

export default {
    methods,
    create:(key,callback)=>{
        const method = methods[`create_${key}`];
        method().then((obj) => {
            callback(obj);
        })
    }
}