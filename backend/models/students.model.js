import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    date_of_birth: {
        type: String,
    },
    roll: {
        type: Number,
    },
    email: {
        type: String,
    },
    gender: {
        type: String,
    },
    blood_group: {
        type: String,
    },
    classes: {
        type: Number,
    },
    Section: {
        type: String,
    },
    parent: {
        type: String,
    },
    phone: {
        type: String,
    },
    religion: {
        type: String,
    },
    address: {
        type: String,
    },

});

const Student = mongoose.model("student", studentSchema);

export default Student;