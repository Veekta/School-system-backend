const mongoose = require("mongoose");

const subjectModel = mongoose.Schema(
  {
    subjectName: {
      type: String,
    },
    subjectTeacher: {
      type: String,
    },
    className: {
      type: String,
    },
    schoolName: {
      type: String,
    },
    // teachCode: {
    //   type: String,
    // },
    classCode: {
      type: String,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classes",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subjects", subjectModel);
