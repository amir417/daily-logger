const express = require ('express');
const mongoose = require ('mongoose');
require("../models/daylog");
const Log = mongoose.model("DailyLog");
// This log should be used as the basis to get and post data.

const dayLogRouter = express.Router();
dayLogRouter.use(express.json());

dayLogRouter.route('/')
.post(async (req, res) => {
  const { 
    wake,
    slept,
    day1,
    day2,
    reflection,
    software,
    health,
    overall, } =  req.body;
    try { 
      Log.create({  wake,
        slept,
        day1,
        day2,
        reflection,
        software,
        health,
        overall,})
        .then((data) => {
          console.log(data);
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
  });

  module.exports = dayLogRouter;