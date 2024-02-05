import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv"
dotenv.config();


console.log("CLOUD-NAME", process.env.CLOUD_NAME);
console.log("CLOUD-API", process.env.CLOUD_API_KEY);
console.log("CLOUD-SECRET", process.env.CLOUD_API_SECRET);


const CLOUD_NAME = process.env.CLOUD_NAME || "";
const CLOUD_API_KEY = process.env.CLOUD_API_KEY || "";
const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || "";


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true,
  });

export default cloudinary;