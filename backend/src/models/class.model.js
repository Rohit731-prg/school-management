import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
    teacherName: { type: String, required: true },
    className: { type: Number, required: true },
    subject: { type: String, required: true },
    section: { type: String, required: true },
    time: { type: String, required: true },
}, {
    timestamps: true,
});

const Class = mongoose.model("Class", classSchema);
export default Class;