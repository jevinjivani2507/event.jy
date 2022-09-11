const express = require("express");
const router = express.Router();


const User = require("../models/user");
const Event = require("../models/event");
const { json } = require("body-parser");


// router.get("/event/:id",function(req,res) {
//     eventid = req.params.id;
//     Event.findOne(({id:eventid}),function(err,value){
//       res.send(value);
//     })
router.get("/user",function(req,res){
    if(req.user){
        res.json(req.user);
    }
})
// });
// router.get("/addevent",function(req,res){
  

//     res.send(req.user);
//     User.updateOne({username:req.user.username},{$push: {events: 1}});
//     // res.send(req.user.events);
// })

module.exports = router;