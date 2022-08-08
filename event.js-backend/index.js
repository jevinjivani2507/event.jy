const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/eventjy", {useNewUrlParser: true});

// const itemsSchema = {
//     name: String
//   };
  
//   const Item = mongoose.model("Item", itemsSchema);
  
//   const item = new Item({
//     name: "Welcome to your todolist!"
//   })

// //   item.save();

app.get("/",function(req,res){
    res.send("Hello");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
})