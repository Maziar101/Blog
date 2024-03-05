import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({path:"./config.env"});

const app = express();
app.use(express.json());
app.use(morgan);
app.use(cors());

// Routes



export default app;