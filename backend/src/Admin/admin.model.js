import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "Admin" },
    isActive: { type: Boolean, default: true },
    profileImage: { type: String },
    isAuth: { type: Boolean, default: false },
    OTP: { type: String },

}, {
    timestamps: true,
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;