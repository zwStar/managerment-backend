/**
 * Created by admin on 2017/8/5.
 */

import express from 'express'
const router = express.Router();
import Admin from '../admin'
import $ from '../utils'

router.get("/teacherOptions",Admin.Course.teacherOptions)
router.get("/courseArranged",Admin.Course.courseArranged)
export default router;