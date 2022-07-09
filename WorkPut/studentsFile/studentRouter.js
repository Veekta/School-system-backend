const {
  createStudent,
  signinStudent,
  getStudents,
  updateStudent,
  getStudent,
  passwordReset,
  newPasswordRequest,
  getAClassStudent,
  getTeacher,
  deleteStudenFromClass,
  deleteFromTeacher,
  getClass,
  deleteStudentFromAdmin,
} = require("../studentsFile/studentsController");

const upload = require("../../utils/multer");
const express = require("express");
const router = express.Router();

router.route("/").get(getStudents);

// router.route("/register/:teacher").post(createStudent);
router.route("/register/:admin/:teacher").post(createStudent);

router.route("/signin").post(signinStudent);

router.route("/reset").post(newPasswordRequest);
router.route("/reset/:id/:token").post(passwordReset);
router.route("/teacher/:teacher").get(getTeacher);

// // router.route("/:id/school").get(getTeacherSchool);

router.route("/:id/:admin/").delete(deleteStudentFromAdmin);

router.route("/:id/:class").delete(deleteStudenFromClass);

router.route("/:id/:teacher").delete(deleteFromTeacher);

//Teacher ID
router.route("/:id").get(getStudent);

router.route("/:classID/classy").get(getClass);
router.route("/:classID/students").get(getAClassStudent);

// router.route("/:id").patch(updateStudent).delete(deleteStudent);

module.exports = router;
