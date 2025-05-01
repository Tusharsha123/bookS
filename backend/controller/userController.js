const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const createUserController = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      res.status(500).send({
        success: false,
        message: "no usr",
      });
    }

    const existUsr = await userModel.findOne({ email });
    if (existUsr) {
      res.status(500).send({
        success: false,
        message: "alrd rgt",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new userModel({
      email,
      name,
      password: hashedPassword,
    });

    await user.save();

    res.status(200).send({
      success: true,
      message: "usr",
      user: {
        _id: user._id,
        fullname: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "!",
    });
  }
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).send({
        success: false,
        message: "no usr",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(500).send({
        success: false,
        message: "no usr",
      });
    }

    const hashedPassword = user.password;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      res.status(500).send({
        success: false,
        message: "! usr",
      });
    }

    const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).send({
      success: true,
      message: "usrrr",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createUserController, loginUserController };
