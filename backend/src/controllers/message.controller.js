import Message from "../models/message.model.js";

export const addMessage = async (req, res) => {
    const { title, recipient, message, sender } = req.body;
    if ( !title || !recipient || !message || !sender ) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const newMessage = new Message({
            title,
            recipient,
            message,
            sender
        });
        const savedMessage = await newMessage.save();
        res.status(201).json({ success: true, message: savedMessage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate('sender');
        res.status(200).json({ success: true, messages: messages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}