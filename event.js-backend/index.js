
require("dotenv").config();
const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const cors = require("cors");
const validInfo = require("./validInfo");
const { Router } = require("express");
// const _ = require("lodash");

const CLIENT_URL = "http://localhost:3000";
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
    })
);

const DB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xzfurao.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DB, {useNewUrlParser: true}).then(() => {console.log("Connected to DB")}).catch(err => {console.log(err.message)});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done){
    done(null, user.id);
});
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
    });
}
));


app.get("/",function(req,res){
    res.send("Hello");
})

// app.post("/login",async (req,res) => {
//     const {username,password} = req.body;

//     console.log(username,password);
// })
// app.get("/auth/google",
//     passport.authenticate("google",{scope:["profile"]})
// );

// app.get("/auth/google/callback",
//     passport.authenticate("google",{failureRedirect:"/login"}), function(req,res){
//         // res.redirect("/secrets");
//         console.log("success");
//     }
// );

app.get("/auth/google",passport.authenticate("google", {scope : ["profile"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect : CLIENT_URL,
    failureRedirect : "/login"
}))


app.post("/register", validInfo,function(req,res){
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err);
            // res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                // res.redirect("/secrets");
                if(validInfo)
                console.log("registered");
            });
        }
    });
});

app.post("/login", validInfo,function(req,res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function(err){
        if(err){
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function(){
                // res.redirect("/secrets");
                console.log("login success");
            });
        }
    });
});

app.listen(4000,function(){
    console.log("Server started on port 3000");
})