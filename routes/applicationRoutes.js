const express = require("express");
const router = express.Router();

const {
  applyJob,
  getApplications,
} = require("../controllers/applicationController");

router.route("/")
  .post(applyJob)
  .get(getApplications);

module.exports = router;