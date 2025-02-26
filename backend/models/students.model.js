import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    Guardian: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    Section: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("student", studentSchema);

export default Student;