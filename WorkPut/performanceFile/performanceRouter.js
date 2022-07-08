const express = require("express");
const router = express.Router();
const {
  createPerformance,
  deletePerformance,
  getSubjectPerformance,
  getStudentPerformance,
} = require("../performanceFile/performanceController");

router.route("/input/:subject/:student").post(createPerformance);
router.route("/:id").get(getSubjectPerformance);
router.route("/:id/result").get(getStudentPerformance);
router.route("/:subject/:student/:performance").delete(deletePerformance);

module.exports = router;
