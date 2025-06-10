import express from 'express';
import { createResult, getAllResult, getResultByStudent } from '../controllers/result.controller.js';

const router = express.Router();

router.post('/addresult', createResult);
router.post('/getResultByStudent', getResultByStudent);
router.get('/getAllResults', getAllResult);

export default router;