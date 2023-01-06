const mongoose = require("mongoose");

const DailyLogSchema = new mongoose.Schema(
  {
    
    wake: Date,
    slept: Number,
    day1: String,
    day2: String,
    reflection: String,
    software: Number,
    health: Number,
    overall: Number,
  },
  {
    collection: "DailyLog",
    timestamps: true,
  }
);

module.exports = mongoose.model("DailyLog", DailyLogSchema);