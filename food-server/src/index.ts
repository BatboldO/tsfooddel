import express, { Application, Request, Response } from "express";
import color from "colors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import authRoute from "./routes/authRoute";
import userRoute from "./routes/userRoute";
import verifyRoute from "./routes/verifyRoute";
import errorHandler from "./middleware/errorHandler";
import categoryRoute from "./routes/categoryRoute";
import foodRoute from "./routes/foodRoute";
import uploadRoute from "./routes/uploadRoute"
import basketRoute from "./routes/basketRoute"

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/category", categoryRoute);
app.use("/Food", foodRoute);
app.use("/verify", verifyRoute);
app.use("/upload", uploadRoute);
app.use("/basket", basketRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(color.rainbow("Server is running " + PORT)));
