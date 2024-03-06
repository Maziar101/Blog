import User from "../Models/UserModel.js";

export const getAllUsers = async (req, res) => {
  const Users = await User.find();
  res.status(200).json({
    data: Users,
    status: "success",
  });
};
