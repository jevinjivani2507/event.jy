const mongoose = require("mongoose");
require("dotenv").config();

const DB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rhtymgo.mongodb.net/?retryWrites=true&w=majority`;

exports.connect = () => {
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });
}

