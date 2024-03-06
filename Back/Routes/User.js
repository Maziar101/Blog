import express from "express";
import { createUser, getAllUsers } from "../Controllers/UserCn.js";

const UserRoutes = express.Router();
UserRoutes.route("/").get(getAllUsers);
UserRoutes.route("/register").post(createUser);

export default UserRoutes;