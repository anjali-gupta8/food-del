import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://anjali:anjali@cluster0.jfylsoj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}