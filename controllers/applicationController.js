const Application = require("../models/Application");

// Apply for a Job
const applyJob = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      message: "Applied Successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Applications
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate("job");

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  applyJob,
  getApplications,
};