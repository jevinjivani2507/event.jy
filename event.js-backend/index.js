require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const cors = require("cors");
const validInfo = require("./validInfo");
const { body, validationResult } = require("express-validator");
const { CourierClient } = require("@trycourier/courier");
const otpGenerator = require('otp-generator')
const otpTool = require("otp-without-db"); 
const bcrypt = require("bcrypt");
const salt =   bcrypt.genSalt(10);

const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false }); 
// const otpSchema = mongoose.Schema({
//   otp: String,createdAt: { type: Date, expires: '2m', default: Date.now }
// });

// const Otp = new mongoose.model("Otp", otpSchema);
// Otp.otp =  bcrypt.hash(Otp, salt);

// Otp.save().then((doc) => res.status(201).send(doc));



// console.log(otp);

const courier = CourierClient({ authorizationToken: "dk_prod_KM1KGMXN0SMPCEJE35ZZ48698H41" });

const CLIENT_URL = "http://localhost:3000";
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "*",    
    })
);

const DB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rhtymgo.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  googleId: String,
  events: [String], 
  imgURL: String
});

const eventSchema = new mongoose.Schema({
  name:String,
  Description: String,
  Tag: String,
  Club: String,
  Date: String,
  Duration: String,
  Price: String,
  No_of_participants: String,
  mode: String,
  imgURL: String,
})


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

eventSchema.plugin(passportLocalMongoose);
eventSchema.plugin(findOrCreate);


const User = new mongoose.model("User", userSchema);
const Event = new mongoose.model("Event", eventSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id, username: profile._json.email}, function (err, user) {
        return cb(err, user);
      });
    }
  )
);



app.get("/", function (req, res) {
  res.send("Hello");
});


app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile","email "] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login",
  })
);

app.post(
  "/register",
  body("username").isEmail(),
  body("password").isLength({ min: 5 }),
 async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      const err = {
        errors: errors.array(),
      };
    //   res.statusCode = 400;
      res.send(err);
    } else {
      
      User.register(
        { username: req.body.username },
        req.body.password,
        function (err, user) {
          if (err) {
            console.log(err);

          } else {
            passport.authenticate("local")(req, res,async function () {

              const { requestId } = await courier.send({
                message: {
                  to: {
                    email: req.body.username,
                  },
                  content: {
                    title: "Welcome!",
                    body: otp,
                  },
                  data: {
                    name: "Hello Jevin",
                  },
                  routing: {
                    method: "single",
                    channels: ["email"],
                  },
                },
              });
            });
          }
        }
      );
    }
  }
);

app.post("/verifyOTP",function(req,res){
  console.log(req.body.otp);
  if (req.body.otp === otp) {
    console.log("You has been successfully registered")
    // res.send("You has been successfully registered");
}
else {
  console.log("otp is incorrect");
    // res.render('otp', { msg: 'otp is incorrect' });
}
});

app.post("/login", body("username").isEmail(),
body("password").isLength({ min: 5 }), 
    function (req, res) {
    
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {    
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {

        console.log("login success");
      });
    }
  });
});

app.get("/logout",function(req,res){
  req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});

app.listen(4000, function () {
  console.log("Server started on port 4000");
});
