const jwt = require("jsonwebtoken");
const Candidate = require("../models/Candidate");

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    }
  );
};

// Register Candidate
const registerCandidate = async (req, res) => {
  const { name, email, password, phone, skills } = req.body;

  try {
    const existingCandidate = await Candidate.findOne({ email });

    if (existingCandidate) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const candidate = await Candidate.create({
      name,
      email,
      password,
      phone,
      skills,
    });

    const token = generateToken(candidate._id);

    res.status(201).json({
      success: true,
      message: "Candidate registered successfully",
      data: {
        _id: candidate._id,
        name: candidate.name,
        email: candidate.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Login Candidate
const loginCandidate = async (req, res) => {
  const { email, password } = req.body;

  try {
    const candidate = await Candidate.findOne({ email });

    if (!candidate || !(await candidate.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = generateToken(candidate._id);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      data: {
        _id: candidate._id,
        name: candidate.name,
        email: candidate.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  registerCandidate,
  loginCandidate,
};