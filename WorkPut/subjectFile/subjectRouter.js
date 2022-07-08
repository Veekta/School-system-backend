const express = require("express");
const router = express.Router();
const {
  createSubject,
  getAllSubjects,
  getSubjectsInAClass,
  getStudentsPerformance,
  getClass,
} = require("../subjectFile/subjectContoller");

router.route("/:id").post(createSubject);
router.route("/:subject").get(getStudentsPerformance);
router.route("/").get(getAllSubjects);
router.route("/:classID/student").get(getClass);
// router.route("/:classID").get(getSubjectsInAClass);
router.route("/:classID/class").get(getSubjectsInAClass);
module.exports = router;
