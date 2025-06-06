import express from "express";
import { addHostel, getAllHostels } from "../controllers/hostel.controller.js";

const router = express.Router();

router.post('/addHostel', addHostel);
router.get('/getAllHostels', getAllHostels);

export default router;