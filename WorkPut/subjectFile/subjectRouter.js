const express = require("express");
const router = express.Router();
const {
  createSubject,
  getSubjectsInAClass,
  AllSubjects,
} = require("../subjectFile/subjectContoller");

router.route("/:id").post(createSubject);
// router.route("/").get(getSubjects);
router.route("/:classID").get(getSubjectsInAClass);
router.route("/:classID").get(getSubjectsInAClass);
router.route("/:teacherID").get(getSubjectsInAClass);
module.exports = router;
