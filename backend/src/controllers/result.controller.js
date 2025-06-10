import Result from "../models/result.model.js";
import Student from "../models/student.model.js";

export const createResult = async (req, res) => {
    const { exam, student, marks, grade } = req.body;
    if ( !exam || !student || !marks || !grade ) return res.status(400).json({ success: false, message: "All fields are required" });

    try {
        const result = await result.findOne({ exam, student });
        if ( result ) return res.status(400).json({ success: false, message: "Result already exists" });

        const newResult = new Result({ exam, student, marks, grade });
        await newResult.save();

        res.status(201).json({ success: true, message: "Result added successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllResult = async (req, res) => {
    try {
        const results = await Result.find();
        res.status(200).json({ success: true, results: results });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getResultByStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findById({ id });
        if ( !student ) return res.status(404).json({ success: false, message: "Student not found" });

        const results = await Result.find({ student: id });
        if ( !results ) return res.status(404).json({ success: false, message: "No Results Available for this student" });

        res.status(200).json({ success: true, results: results });
        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}