const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

const User = require("../models/user");
const Event = require("../models/event");


router.get("/event/:id",function(req,res) {
    eventid = req.params.id;
    Event.findOne(({id:eventid}),function(err,value){
      res.send(value);
    })
});

router.get("/allevents",function(req,res){
    Event.find({},function(err,value){
      res.send(value);
    })
})

router.post("/addEvents", function (req, res) {
  const event = new Event({
    name: req.body.name,
    description: req.body.description,
    tag: req.body.tag,
    club: req.body.club,
    date: req.body.date,
    duration: req.body.duration,
    price: req.body.price,
    no_of_participants: req.body.no_of_participants,
    mode: req.body.mode,
    imgURL: req.body.imgURL,
  });
  Event.save();

});


module.exports = router;