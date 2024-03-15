import express from "express";
import { createPost, deletePost, getAllPost, getOnePost, updatePost } from "../Controllers/PostCn.js";
import { isLogin } from "../middlewares/isLogin.js";
const PostRoutes = express.Router();

PostRoutes.route("/").get(getAllPost).post(isLogin,createPost);
PostRoutes.route("/:id").get(getOnePost).delete(deletePost).patch(updatePost);

export default PostRoutes;