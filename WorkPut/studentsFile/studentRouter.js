const {
  createStudent,
  signinStudent,
  deleteStudent,
  getStudents,
  updateStudent,
  getStudent,
  passwordReset,
  newPasswordRequest,
  getAClassStudent,
} = require("../studentsFile/studentsController");

const upload = require("../../utils/multer");
const express = require("express");
const router = express.Router();

router.route("/").get(getStudent);

router.route("/register").post(createStudent);

router.route("/signin").post(signinStudent);

router.route("/reset").post(newPasswordRequest);
router.route("/reset/:id/:token").post(passwordReset);

// // router.route("/:id/school").get(getTeacherSchool);

//Teacher ID
router.route("/:id").get(getStudents);

router.route("/classStu/:classID").get(getAClassStudent);

router.route("/:id").patch(upload, updateStudent).delete(deleteStudent);

module.exports = router;
