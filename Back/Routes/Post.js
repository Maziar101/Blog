import express from "express";
import { createPost, getAllPost, getOnePost } from "../Controllers/PostCn.js";
import { isLogin } from "../middlewares/isLogin.js";
const PostRoutes = express.Router();

PostRoutes.route("/").get(getAllPost).post(isLogin,createPost);
PostRoutes.route("/:id").get(getOnePost);

export default PostRoutes;