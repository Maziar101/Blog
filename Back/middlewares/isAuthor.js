import jwt from "jsonwebtoken";
import Post from "../Models/PostModels.js";

export const isAuthor = async(req,res,next)=>{
    try{
        const {id} = jwt.verify(req.headers.authorization?.split(" ")[1],process.env.JWT_SECRET);
        const post = await Post.findById(req.params.id);
        if(post.userid == id){
            next();
        }else{
            return res.status(401).json({
                message:"You dont have promission to edit this post",
            });
        }
    }catch(err){
        return res.status(401).json({
            message:'post id or token invalid'
    })
    }
};