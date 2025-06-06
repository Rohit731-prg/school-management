import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema({
    name: { type: String },
    email: { type: String },
    Phone: { type: String },
    gender: { type: String },
    className: { type: Number },
    Section: { type: String },
    Subject: { type: String },
    address: { type: String },
    photo: { type: String },
    password: { type: String },
    role: { type: String, default: "Teacher" }
}, {
    timestamps: true,
});

const Teacher = mongoose.model("teacher", teacherSchema);
export default Teacher;