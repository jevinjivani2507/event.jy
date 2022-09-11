const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose"); 
// const findOrCreate = require("mongoose-findorcreate");
const eventSchema = new mongoose.Schema({
    id:{type:Number,
    unique:true},
    name: {type:String,unique:true},
    description: {type:String,unique:true},
    tag: {type:String,unique:true},
    startTime: {type:String,unique:true},
    club: {type:String},
    date: {type:String,unique:true},
    duration: {type:String,unique:true},
    price: {type:String,unique:true},
    no_of_participants: {type:String,unique:true},
    mode: {type:String,unique:true},
    imgURL: {type:String,unique:true},
  });


// eventSchema.plugin(passportLocalMongoose);
// eventSchema.plugin(findOrCreate);

module.exports = new mongoose.model("Event",eventSchema);

