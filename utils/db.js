const mongoose = require("mongoose");
const url =
  "mongodb+srv://Veekta:onyeka17$@cluster0.vkqi4.mongodb.net/SchoolErp2?";

const urls = "mongodb://localhost/schoolManagementDB";

mongoose
  .connect(urls)
  .then(() => {
    console.log("database connected...");
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = mongoose;
