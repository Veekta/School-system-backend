const {
  passwordReset,
  newPasswordRequest,
  signinSchool,
  verifiedSchool,
  createSchool,
  updateSchool,
  deleteSchool,
  getSchool,
  getSchools,
  getSchoolTeacher,
  getStudentsDetail,
  getStudent,
} = require("../AdminController/AdminController");

const upload = require("../../../utils/multer");
const express = require("express");
const router = express.Router();

router.route("/").get(getSchools);

router.route("/register").post(createSchool);
router.route("/signin").post(signinSchool);

router.route("/:id/:token").get(verifiedSchool);

router.route("/reset").post(newPasswordRequest);
router.route("/reset/:id/:token").post(passwordReset);

router.route("/:id/teachers/get").get(getSchoolTeacher);
router.route("/:id/students/get").get(getStudentsDetail);
router.route("/:id/students/get/:id").get(getStudent);

router
  .route("/:id")
  .get(getSchool)
  .patch(upload, updateSchool)
  .delete(deleteSchool);

module.exports = router;
