const express = require("express");
const getBook = require("../controller/bookController");
const router = express.Router();

router.get("/getbook", getBook);

module.exports = router;
