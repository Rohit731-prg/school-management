import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
    name: { type: String },
    date_of_birth: { type: String },
    roll: { type: Number },
    email: { type: String },
    gender: { type: String },
    blood_group: { type: String },
    className: { type: Number },
    section: { type: String },
    parent: { type: String },
    phone: { type: String },
    religion: { type: String },
    address: { type: String },
    photo: { type: String },
    password: { type: String, required: true },
    role: { type: String, default: "Student" }
}, {
    timestamps: true,
});

const Student = mongoose.model("Student", studentSchema);
export default Student;