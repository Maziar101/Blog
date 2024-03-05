import mongoose from "mongoose";
import app from "./app.js";
const Port = process.env.PORT || 5000;

mongoose.connect(process.env.DATA_BASE).then(()=>{
    console.log("Database Is Connected");
})

app.listen(Port,()=>{
    console.log("Server Is Running On Port " + Port);
});