import mongoose from "mongoose";
import env from 'dotenv';
env.config();
export const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected  Successfully");
    } catch (error) {
        console.log(error);
    }
}