const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const eventSchema = new mongoose.Schema({
    id:Number,
    name: String,
    description: String,
    tag: String,
    club: String,
    date: String,
    duration: String,
    price: String,
    no_of_participants: String,
    mode: String,
    imgURL: String,
  });

eventSchema.plugin(passportLocalMongoose);
eventSchema.plugin(findOrCreate);

  module.exports = new mongoose.model("Event",eventSchema);