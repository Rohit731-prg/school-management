import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "backend/.env" });

export default function connectToDB() {
    mongoose.connect(`${process.env.MONGO_URI}SMS`).then(() => {
        console.log("Connected to MongoDB");
    }).catch((e)=>{
        console.error(e.message);
    });

}