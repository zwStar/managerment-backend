/**
 * Created by admin on 2017/8/5.
 */
import Base from './base'

import Models from '../models'

let TeacherModel = Models.admin.TeacherModel;

let TeacherAPI= new Base({
    model:TeacherModel
});

export default TeacherAPI.methods;

