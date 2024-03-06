import express from "express";
import { getAllCategory } from "../Controllers/CategoryCn.js";
const CategoryRoutes = express.Router();
CategoryRoutes.route("/").get(getAllCategory).post();
export default CategoryRoutes;
