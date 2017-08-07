/**
 * Created by 郭泽伟 on 2017/8/1.
 */
import express from 'express'
const router = express.Router();
import Admin from '../admin'
import $ from '../utils'

router.post("/login",Admin.User.login)
router.post("/changeInfo",$.checkToken,Admin.User.update);


//创建学生信息
router.get("/addStudent",Admin.Student.create);

//创建教师信息
router.post("/addTeacher",Admin.Teacher.create);
export default router;