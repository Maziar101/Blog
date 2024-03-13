import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const Register = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const hashedPass = bcryptjs.hashSync(password, 10);
    const user = User.create({ name, username, password: hashedPass });
    return res.status(201).json({ message: "Register Successfully" });
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};
export const Login = async (req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).send("Please Provide username and password");
    }
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).json({
            message:"username or password is incorrect",
            data:null,
        });
    };
    const correctPassword = bcryptjs.compare(password,user.password);
    if(!correctPassword){
        return res.status(400).json({
            message:"username or password is incorrect",
            data:null,
        });
    };
    const {password:hashPass,...userOthers} = user._doc;
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.status(200).json({
        data:{
            token,
            user:userOthers,
        },
        message:"Login Successfully"
    });
};