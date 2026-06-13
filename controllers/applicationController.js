const Application = require("../models/Application");

// Apply for a Job
const applyJob = async (req, res) => {
  try {
    console.log(req.body);
    const existingApplication= await Application.findOne({candidateEmail:req.body.candidateEmail,
      job: req.body.job
    });
    if(existingApplication){
      return res.status(400).json({success: false,
        message: "You have already appied for this job",
      });
    }
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      message: "Applied Successfully",
      data: application,
    });
  } catch (error) {
    console.log("ERROR: ",error);
    res.status(500).json({
      success: false,
      message: error.message,
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
// Getting updates on Applications
const updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Status Updated",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Applications of a Particular Candidate
const getCandidateApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      candidateEmail: req.params.email,
    }).populate("job");

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
  getCandidateApplications,
  updateApplicationStatus,
};