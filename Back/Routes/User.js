import express from "express";
import { getAllUsers } from "../Controllers/UserCn.js";

const UserRoutes = express.Router();
UserRoutes.route("/").get(getAllUsers);
UserRoutes.route("/register").post();

export default UserRoutes;