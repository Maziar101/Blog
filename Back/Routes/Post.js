import express from "express";
import { createPost, deletePost, getAllPost, getOnePost, updatePost } from "../Controllers/PostCn.js";
import { isLogin } from "../middlewares/isLogin.js";
import { isAuthor } from "../middlewares/isAuthor.js";
const PostRoutes = express.Router();

PostRoutes.route("/").get(getAllPost).post(isLogin,createPost);
PostRoutes.route("/:id").get(getOnePost).delete(isLogin,isAuthor,deletePost).patch(isLogin,isAuthor,updatePost);

export default PostRoutes;