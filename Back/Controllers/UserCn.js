import User from "../Models/UserModel.js";

export const getAllUsers = async (req, res, next) => {
  const Users = await User.find();
  res.status(200).json({
    data: Users,
    status: "success",
  });
};
export const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res
      .status(201)
      .json({ data: newUser, message: "user created", status: "success" });
  } catch (err) {
    res
      .status(400)
      .json({ data: null, message: err.message, status: "failed" });
  }
};
