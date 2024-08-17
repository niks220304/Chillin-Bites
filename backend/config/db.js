import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://nikkinagpal22:NIKS2203@cluster0.hrbchsf.mongodb.net/chillin-bites').then(()=>console.log("DB Connected"));
}