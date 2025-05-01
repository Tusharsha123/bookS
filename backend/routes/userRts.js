const express = require("express");
const {
  createUserController,
  loginUserController,
} = require("../controller/userController");

const router = express.Router();

router.post("/crtUsr", createUserController);

router.post("/lgnUsr", loginUserController);

module.exports = router;
