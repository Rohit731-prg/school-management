import mongoose, { Schema } from "mongoose";

const librarySchema = new Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    written: { type: String, required: true },
    className: { type: Number, required: true },
}, {
    timestamps: true,
});

const Library = mongoose.model("Library", librarySchema);
export default Library;