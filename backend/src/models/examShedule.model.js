import mongoose, { Schema } from "mongoose";

const examSheduleSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    subject: { type: String, required: true },
    className: { type: Number, required: true },
    section: { type: String, required: true },
    time: { type: String, required: true },
});

const ExamShedule = mongoose.model("ExamShedule", examSheduleSchema);
export default ExamShedule;