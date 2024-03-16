import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    category:{
        type:Object,
        required:true,
    }
}, {timestamps: true});
const Post = mongoose.model("PostModel",postSchema);
export default Post;