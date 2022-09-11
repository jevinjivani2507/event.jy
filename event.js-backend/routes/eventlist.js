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

router.post("/addEvents", function (req, res,err) {
  const event = new Event({
    id:req.body.id,
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

  event.save(function(err){
    if(err) return res.send(false);
    else res.send(true);
  });

});


module.exports = router;