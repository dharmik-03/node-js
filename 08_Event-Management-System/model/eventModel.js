import mongoose, { Mongoose } from "mongoose";

const EventModel = new Mongoose.schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  Date: {
    type: Number,
    required: true,
    trim: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  TicketPrice: {
    type: Number,
    required: true,
  },
});
