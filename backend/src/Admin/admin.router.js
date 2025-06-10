import express from 'express';
import { compliteRegistration, createAdmin, forgotPassword, getAllAdmins, logIn, resetPassword } from './admin.controller.js';

const router = express.Router();

router.post('/createAdmin', createAdmin);
router.put('/compliteRegistration/:id', compliteRegistration);
router.post('/login', logIn);
router.post('/forgatePassword', forgotPassword);
router.put('/resetPassword', resetPassword);
router.get('/allAdmins', getAllAdmins);

export default router;