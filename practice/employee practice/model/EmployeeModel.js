import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  EmID: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
    enum: ["IT", "HR", "Management", "cyber security"],
    default: "IT",
  },
  Email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

const employee = mongoose.model("employee", employeeSchema);

export default employee;
