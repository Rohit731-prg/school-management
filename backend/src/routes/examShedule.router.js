import express from 'express';
import { createExamShedule, getAllExamShedules, getExamShedulesByClassName } from '../controllers/examShedule.controller.js';

const router = express.Router();

router.post('/createExamShedule', createExamShedule);
router.get('/getAllExamShedules', getAllExamShedules);
router.post('/getexamSheduleByClassName/', getExamShedulesByClassName);

export default router;