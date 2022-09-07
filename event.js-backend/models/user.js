const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    googleId: String,
    events: [String],
    imgURL: String,
  });

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
  
module.exports = new mongoose.model("User", userSchema);
  