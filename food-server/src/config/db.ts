import mongoose from "mongoose";
import color from "colors";


export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log(color.bgGreen("Database is connected"));
  } catch (error) {
    console.log(color.bgRed("Database failed to connect."));
    console.log(error)
  }
};