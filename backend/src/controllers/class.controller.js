import Class from "../models/class.model.js";

export const addClass = async (req, res) => {
    const { teacherName, className, subject, section, time } = req.body;

    if (!teacherName || !className || !subject || !section || !time) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const classNameExists = await Class.findOne({ className, section });
        if (classNameExists) {
            return res.status(400).json({ success: false, message: "Class already exists for this section" });
        }
        const newClass = new Class({
            teacherName,
            className,
            subject,
            section,
            time
        });

        await newClass.save();
        res.status(201).json({ success: true, data: newClass, message: "Class added successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllClasess = async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json({ success: true, data: classes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
