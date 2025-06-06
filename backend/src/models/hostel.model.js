import mongoose, { Schema } from "mongoose";

const hostelSchema = new Schema({
    name: { type: String, required: true },
    roomNumber: { type: String, required: true },
    roomType: { type: String, required: true, enum: ["Big", "Medium", "Small"] },
    numberBed: { type: Number, required: true },
    costPerBed: { type: Number, required: true },
});

const Hostel = mongoose.model("Hostel", hostelSchema);
export default Hostel;