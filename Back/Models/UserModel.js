import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"Username already exists"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    }
});
const User = mongoose.model("userModel",userSchema);
export default User