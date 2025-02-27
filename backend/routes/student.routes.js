import { Router } from "express";
import Student from "../models/students.model.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/add", async (req, res) => {
    const {
        name, date_of_birth, roll, email, gender, blood_group, classes, section, parent, phone, religion, address,
    } = req.body;
    try {
        const student = new Student({
            name, date_of_birth, roll, email, gender, blood_group, classes, section, parent, phone, religion, address,
        });
        await student.save();
        res.status(201).json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/all", async (req, res) => {
    try {
        const students = await Student.find({
        });
        res.json({ success: true, data: students });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;