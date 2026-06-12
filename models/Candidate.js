const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },

    phone: {
      type: String,
      trim: true,
    },

    skills: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

candidateSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

candidateSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Candidate', candidateSchema);