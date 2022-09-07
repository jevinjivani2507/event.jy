const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

const User = require("../models/user");

router.post("/events",function(req,res){
    User.find
})