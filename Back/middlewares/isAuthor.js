import jwt from "jsonwebtoken";
import Post from "../Models/PostModels.js";

export const isAuthor = async(req,res,next)=>{
    const {id} = jwt.verify(req.authorization.split(" ")[1],process.env.JWT_SECRET);
    const post = await Post.findById(id);
    if(post){
        next();
    }else{
        return res.status(401).json({
            message:"You dont have promission to edit this post",
        });
    }
};