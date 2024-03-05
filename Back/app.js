import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config({path:"./config.env"});

app.use(morgan);
app.use(cors());

// Routes



export default app;