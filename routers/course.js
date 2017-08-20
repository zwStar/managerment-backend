/**
 * Created by admin on 2017/8/5.
 */

import express from 'express'
const router = express.Router();
import Admin from '../admin'

router.get("/findGrade",Admin.Course.findGrade)
router.get("/teacherOptions",Admin.Course.teacherOptions)
router.get("/courseArranged",Admin.Course.courseArranged)

export default router;