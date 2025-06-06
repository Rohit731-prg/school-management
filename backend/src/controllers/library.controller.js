import Library from "../models/library.model.js";

export const addBook = async (req, res) => {
    const { name, subject, written, className } = req.body;
    if (!name || !subject || !written || !className) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    try {
        const book = await Library.findOne({ name });
        if (book) {
            return res.status(400).json({ success: false, message: "Book already exists" });
        }
        const newBook = new Library({ name, subject, written, className });
        await newBook.save();

        res.status(201).json({ success: true, message: "Book added successfully", book: newBook });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const books = await Library.find();
        res.status(200).json({ success: true, books });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}