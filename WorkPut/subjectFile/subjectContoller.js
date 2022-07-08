const subjectModel = require("../../model/subjectModel");
const classModel = require("../../model/classModel");
const mongoose = require("mongoose");

const createSubject = async (req, res) => {
  try {
    const { subjectName, subjectTeacher, subjectType } = req.body;

    const getURL = await classModel.find();

    if (getURL) {
      const getSchool = await classModel.findById(req.params.id);

      const newSubject = new subjectModel({
        subjectName,
        subjectTeacher,
        subjectType,
        schoolName: getSchool.schoolName,
        teachCode: getSchool.teacherCode,
        classCode: getSchool.classCode,
        className: getSchool.className,
      });

      newSubject.class = getSchool;
      newSubject.save();

      getSchool.subject.push(mongoose.Types.ObjectId(newSubject._id));
      getSchool.save();

      res.status(200).json({ message: "subject created", data: newSubject });
    } else {
      res.status(404).json({
        message: "something went wrong",
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSubjectsInAClass = async (req, res) => {
  try {
    const users = await classModel
      .findById(req.params.classID)
      .populate("subject");
    res.status(200).json({ message: "Subject found", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getClass = async (req, res) => {
  try {
    const users = await classModel
      .findById(req.params.classID)
      .populate("student");
    res.status(200).json({ message: "class found", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllSubjects = async (req, res) => {
  try {
    const users = await subjectModel.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "Student found", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getStudentsPerformance = async (req, res) => {
  try {
    const users = await subjectModel
      .findById(req.params.subject)
      .populate("performances");
    res.status(200).json({ message: "Student found", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createSubject,
  getAllSubjects,
  getSubjectsInAClass,
  getClass,
  getStudentsPerformance,
};
