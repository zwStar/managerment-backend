/**
 * Created by 郭泽伟 on 2017/8/8.
 */
import express from 'express'
const router = express.Router();
import API from '../api/test'
import $ from '../utils'

router.get("/course/findGrade",API.Student.findGrade);
export default router;