import express from 'express';
import { addNotice, getAllNotices } from '../controllers/notice.controller.js';

const router = express.Router();

router.post('/addNotice', addNotice);
router.get('/getAllNotices', getAllNotices);

export default router;