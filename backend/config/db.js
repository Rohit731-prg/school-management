import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "backend/.env" });

export default function connectToDB() {
    mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
        console.log('Connected to DB');
    }).catch((err) => {
        console.log('DB connection error:', err);
    });
}
