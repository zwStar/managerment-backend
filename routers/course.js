/**
 * Created by admin on 2017/8/5.
 */

import express from 'express'
const router = express.Router();
import Admin from '../admin'

router.get("/findGrade",Admin.Course.findGrade)     //查找年级
router.get("/teacherOptions",Admin.Course.teacherOptions)   //教师列表
router.get("/courseArranged",Admin.Course.courseArranged)   //安排课程
router.get("/arrangedLists",Admin.Course.arrangedLists)                //已安排课程

export default router;