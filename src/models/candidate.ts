import mongoose from "mongoose";
const CandidateSchema = new mongoose.Schema({
  fn: {
    type: String(),
    required: "First name is required !",
    minlength: 1,
    maxlength: 100,
  },
  ln: {
    type: String(),
    required: "Last name is required !",
    minlength: 1,
    maxlength: 100,
  },
  phone: {
    type: String(),
    required: "Name is required !",
    minlength: 10,
    maxlength: 12,
  },
  email: {
    type: String(),
    required: "Email is required !",
  },
});

export default mongoose.model("POST", CandidateSchema);
