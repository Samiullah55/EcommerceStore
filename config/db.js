import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Conneted To Mongodb Databse`);
  } catch (error) {
    console.log(`Errro in Mongodb`.bgRed.white);
  }
};

export default connectDB;
