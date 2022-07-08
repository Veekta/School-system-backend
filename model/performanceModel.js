const mongoose = require("mongoose");
const performanceSchema = mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects",
    },
    subjectName: {
      type: String,
    },
    performance40: {
      type: Number,
    },
    performance60: {
      type: Number,
    },
    studentName: {
      type: String,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "students",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("performance", performanceSchema);
