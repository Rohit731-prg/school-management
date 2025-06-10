import mongoose, { Schema } from "mongoose";

const ResultSchma = new Schema({
    exam : { type: mongoose.Types.ObjectId, ref: 'ExamShedule', required: true },
    student: { type: mongoose.Types.ObjectId, ref: 'Student', required: true },
    marks: { type: Number, required: true },
    grade: { type: String, required: true },
}, {
    timestamps: true,
});

const Result = mongoose.model("Result", ResultSchma);
export default Result;