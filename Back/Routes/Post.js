import express from "express";
import { getAllPost, getPostById } from "../Controllers/PostCn.js";
const PostRoutes = express.Router();

PostRoutes.route("/").get(getAllPost);
PostRoutes.route("/:id").get(getPostById);

export default PostRoutes;