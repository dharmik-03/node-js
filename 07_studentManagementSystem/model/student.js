import mongoose, { Types } from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    Types: string,
    required: true,
    trim: true,
  },
  GRid: {
    Types: Number,
    required: true,
    unique: true,
    trim: true,
  },
  course: {
    Types: string,
    required: true,
    enum: ["full stack development", "graphic design", "UI/UX"],
  },
  MobileNumber: {
    Types: Number,
    required: true,
    min: 10,
  },
});

const student = mongoose.model("student data", studentSchema);
