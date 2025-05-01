const bookModel = require("../model/book");

const getBook = async (req, res) => {
  try {
    const book = await bookModel.find();
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "err",
    });
  }
};

module.exports = getBook;
