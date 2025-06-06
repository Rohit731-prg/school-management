import mongoose, { Schema } from "mongoose";

const noticeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    PostedBy: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Notice = mongoose.model("Notice", noticeSchema);
export default Notice;