const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
console.log(PORT);

app.use(cors());
app.use(express.json());

app.use("/api/v1/book", require("./routes/bookRoute"));
app.use("/api/v1/user", require("./routes/userRts"));

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("cnt");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "err",
      error,
    });
  }
};

connectDb();

app.listen(PORT, () => {
  console.log("list...");
});
