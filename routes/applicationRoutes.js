const express = require("express");
const router = express.Router();

const {
  applyJob,
  getApplications,
  getCandidateApplications,
  updateApplicationStatus,
} = require("../controllers/applicationController");

router.route("/")
  .post(applyJob)
  .get(getApplications);

router.get("/candidate/:email", getCandidateApplications);
router.put("/:id/status", updateApplicationStatus);

module.exports = router;