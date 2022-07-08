const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("database connected...");
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = mongoose;
