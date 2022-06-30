const subjectModel = require("../../model/subjectModel");
const classModel = require("../../model/classModel");
const teacherModel = require("../../model/TeacherModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("../../utils/cloudinary");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Gideonekeke64@gmail.com",
    pass: "sgczftichnkcqksx",
  },
});

const createSubject = async (req, res) => {
  try {
    const { subjectName, subjectTeacher } = req.body;

    const getURL = await classModel.findById(req.params.id);

    if (getURL) {
      const getSchool = getURL;
      const newSubject = new subjectModel({
        subjectName,
        subjectTeacher,
        schoolName: getSchool.schoolName,
        teachCode: getSchool.teacherCode,
        classCode: getSchool.classCode,
        className: getSchool.className,
      });

      newSubject.class = getSchool;
      newSubject.save();

      getSchool.subjects.push(mongoose.Types.ObjectId(newSubject._id));
      getSchool.save();

      res.status(200).json({ message: "subject created", data: newSubject });
    } else {
      res.status(404).json({
        message:
          "something is wrong with the CODE... Please check and CORRECT!",
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const AllSubjects = async (req, res) => {
  try {
    // const users = await teacherModel.findById(req.params.id);

    const users = await teacherModel
      .findById(req.params.teacherID)
      .populate("class");
    res.status(200).json({ message: "All Subjects", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSubjectsInAClass = async (req, res) => {
  try {
    const users = await classModel
      .findById(req.params.classID)
      .populate("subjects");
    res.status(200).json({ message: "Subject found", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// const getAllSubjects = async (req, res) => {
//   try {
//     const users = await subjectModel.find().sort({ createdAt: -1 });
//     res.status(200).json({ message: "Student found", data: users });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// const getStudent = async (req, res) => {
//   try {
//     const users = await classModel.findById(req.params.id).populate("student");
//     res.status(200).json({ message: "Student found", data: users });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

module.exports = {
  createSubject,

  //   getAllSubjects,
  //   getStudents,

  //   getStudent,
  AllSubjects,
  getSubjectsInAClass,
};
