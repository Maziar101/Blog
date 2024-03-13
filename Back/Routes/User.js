import express from "express";
import { Login, Register } from "../Controllers/AuthCn.js";

const UserRoutes = express.Router();
UserRoutes.route("/").post(Login);
UserRoutes.route("/register").post(Register);

export default UserRoutes;
