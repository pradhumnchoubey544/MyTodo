import mongoose from "mongoose";

const connectDB = async () =>mongoose.connect(process.env.MONGO_URI!);
console.log(connectDB,"db connect");
export default connectDB;
