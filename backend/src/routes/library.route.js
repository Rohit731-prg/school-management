import express from 'express';
import { addBook, getAllBooks } from '../controllers/library.controller.js';

const router = express.Router();

router.post('/addBook', addBook);
router.get('/getAllBooks', getAllBooks);

export default router;