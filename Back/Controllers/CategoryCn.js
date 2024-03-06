import Category from "../Models/CategoryModels.js";

export const getAllCategory = async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({ data: categories, status: "success" });
};
