import mongoose from "mongoose";

const CategoryMode = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please provide a category name"],
        unique: true,
    }
});

const Category = mongoose.model("Category",CategoryMode);
export default Category;