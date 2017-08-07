/**
 * Created by admin on 2017/8/5.
 */
import Model from '../models'

import Base from './base'

let StudentModel = Model.admin.StudentModel;

let StudentAPI = new Base({
   model:StudentModel
});

export default StudentAPI.methods;