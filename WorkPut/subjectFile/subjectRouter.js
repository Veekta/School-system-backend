const express = require("express");
const router = express.Router();
const {
  createSubject,
  //   getAllSubjects,
  getSubjectsInAClass,
} = require("../subjectFile/subjectContoller");

router.route("/:id").post(createSubject);
// router.route("/").get(getSubjects);
router.route("/:classID").get(getSubjectsInAClass);
router.route("/:classID").get(getSubjectsInAClass);
module.exports = router;
