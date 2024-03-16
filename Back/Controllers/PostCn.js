import jwt from "jsonwebtoken";
import Post from "../Models/PostModels.js";

export const getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find(req.query);
    return res.status(200).json({
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
export const createPost = async (req, res, next) => {
  try {
    const { author = "", userid = "", ...others } = req.body;
    const { id, username } = jwt.verify(
        req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    const newPost = await Post.create({
      author: username,
      userid: id,
      ...others,
    });
    return res.status(201).json({
      data: {
        newPost,
      },
      message: "Post Created Successfully!",
    });
  } catch (err) {
    return res.status(401).json({ err });
  }
};
export const getOnePost = async (req, res, next) => {
  try {
    const OnePost = await Post.findById(req.params.id).select([
      "-_id",
      "-__v",
      "-userid",
    ]);
    return res.status(200).json({
      data: {
        OnePost,
      },
    });
  } catch (err) {
    return res.status(404).json({
      message: "the post not found",
    });
  }
};
export const updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).json({
      data: {
        post: updatedPost,
      },
      message: "The Post has been Updated",
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
export const deletePost = async (req, res, next) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.id);
    return res.status(201).json({
      message: "Post Has Been Deleted",
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
};
