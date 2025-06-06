import express from 'express';
import { createAccount, getAllAccounts } from '../controllers/account.controller.js';

const router = express.Router();

router.post('/addAccount', createAccount);
router.get('/getAllAccounts', getAllAccounts);

export default router;