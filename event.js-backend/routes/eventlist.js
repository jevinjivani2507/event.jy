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

module.exports = router;