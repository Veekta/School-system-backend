const mongoose = require("mongoose");

const studentModel = mongoose.Schema(
  {
    schoolName: {
      type: String,
    },

    schoolCode: {
      type: String,
    },

    studentCode: {
      type: String,
    },

    teachCode: {
      type: String,
    },

    classCode: {
      type: String,
    },
    nameOfClass: {
      type: String,
    },
    parentName1: {
      type: String,
    },
    parentName2: {
      type: String,
    },
    parentPhone: {
      type: Number,
    },
    feeStatus: {
      type: Boolean,
      Default: false,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admins",
    },

    fullName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
    },
    DOB: {
      type: String,
    },
    Address: {
      type: String,
    },
    FathersOccupation: {
      type: String,
    },
    displayName: {
      type: String,
    },

    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },

    verified: {
      type: Boolean,
      default: true,
    },

    performance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "performance",
      },
    ],

    gender: {
      type: String,
    },
    religion: {
      type: String,
    },
    profile: {
      type: String,
    },

    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teachers",
    },

    status: {
      type: String,
      default: "student",
    },

    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classes",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("students", studentModel);
