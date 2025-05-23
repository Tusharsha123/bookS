const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

module.exports = mongoose.model("Book", bookSchema);
