import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName :{
    type: String,
    trim: true,
  },
  lastName :{
    type: String,
    trim: true,
  },
  phone :{
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: [true, "Email must be unique!"],
  },
  password: {
    type: String,
    trim: true,
    select: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    select: false,
  },
  verificationCodeValidation: {
    type: Number,
    select: false,
  },
  forgotPasswordCode: {
    type: String,
    select: false,
  },
  forgotPasswordCodeValidation: {
    type: Number,
    select: false,
  },
}, {
  timestamps: true
});

// Correct ES module export
export default mongoose.model("User", userSchema);
