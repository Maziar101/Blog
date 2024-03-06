import Post from "../Models/PostModels.js"

export const getAllPost = async (req,res,next)=>{
    const Posts = await Post.find();
    res.status(200).json({
        data:Posts,
        status:"success",
    });
};
export const getPostById = async (req,res,next)=>{
    const onePost = await Post.findById(req.params.id);
    if(!onePost){
        return res.status(404).json({
            data:null,
            message:"Post Is Not Found",
            status:"failed",
        });
    }
    res.status(200).json({
        data:onePost,
        status:"success",
    });
};