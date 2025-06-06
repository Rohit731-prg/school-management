import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
    title: { type: String, required: true },
    recipient: { type: String, required: true },
    message: { type: String, required: true },
    sender: { type: mongoose.Types.ObjectId, ref: 'Student', required: true },
}, {
    timestamps: true
});

const Message = mongoose.model('Message', messageSchema);
export default Message;