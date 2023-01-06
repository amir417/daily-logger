const express = require ('express');
const mongoose = require ('mongoose');
require("../models/daylog");
const Log = mongoose.model("DailyLog");


const prevlogRouter = express.Router();
prevlogRouter.use(express.json());

prevlogRouter.route('/')
.get(async (req, res) => {
    // const { token } = req.body;
    try {
     
  
      Log.find()
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
  });

  
  module.exports = prevlogRouter; 