import express from 'express';
import { addClass, getAllClasess } from '../controllers/class.controller.js';

const router = express.Router();

router.post('/classAdd', addClass);
router.get('/classList', getAllClasess);

export default router;