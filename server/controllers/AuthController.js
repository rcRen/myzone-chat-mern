import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPwd = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPwd;

  const { email } = req.body.email;
  console.info(req.body)
  try {
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exist." });
    }
    const newUser = new UserModel(req.body);
    const user = await newUser.save();
    const { password, ...otherInfo } = user._doc;
    res.status(200).json({ user: otherInfo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Wrong password." });
      } else {
        const token = jwt.sign(
          {
            email: user.email,
            id: user._id,
          },
          process.env.JWTKEY,
          { expiresIn: "24h" }
        );
        const { password, ...otherInfo } = user._doc;

        res.status(200).json({ user: otherInfo, token });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
