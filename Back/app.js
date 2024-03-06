import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import CategoryRoutes from "./Routes/Category.js";
dotenv.config({path:"./config.env"});

const app = express();
app.use(express.json());
app.use(morgan);
app.use(cors());

// Routes
app.use("/api/categories",CategoryRoutes);
app.use("*",(req,res)=>{
    res.status(404).json({message:"Api Address Not Found"});
});


export default app;