import ExamShedule from "../models/examShedule.model.js";

export const createExamShedule = async () => {
    const { name, subject, className, section, time, date } = req.body;
    if (!name || !subject || !className || !section || !time || !date) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const exam  = await ExamShedule.findOne({ name, subject, className });
        if ( !exam ) return res.status(400).json({ success: false, message: "Exam already exists" });

        const newExam  = new ExamShedule({ name, subject, className, section, time, date });
        await newExam .save();

        res.status(201).json({ success: true, message: "Exam added successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllExamShedules = async (req, res) => {
    try {
        const allExams = await ExamShedule.find();
        res.status(200).json({ success: true, data: allExams });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getExamShedulesByClassName = async (req, res) => {
    const { className } = req.body;

    try {
        const exams = await ExamShedule.find({ className });
        res.status(200).json({ success: true, data: exams });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}