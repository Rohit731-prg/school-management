import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    date_of_birth: {
        type: String
    },
    id: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    religion: {
        type: String
    },
    address: {
        type: String
    },
});

const Teacher = mongoose.model("Teachers", teacherSchema);

export default Teacher;