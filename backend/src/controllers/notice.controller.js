import Notice from "../models/notice.model.js";

export const addNotice = async (req, res) => {
    const { title, description, PostedBy } = req.body;
    if ( !title || !description || !PostedBy ) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    try {
        const notice = await Notice.findOne({ title, description, PostedBy });
        if (notice) {
            return res.status(400).json({ success: false, message: "Notice already exists" });
        }
        const newNotice = new Notice({ title, description, PostedBy });
        await newNotice.save();

        res.status(201).json({ success: true, message: "Notice added successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ date: -1 });
        res.status(200).json({ success: true, notices });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}