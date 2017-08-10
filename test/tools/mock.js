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
            managerTeacher:Mock.mock('@cname')
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