const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const { CourierClient } = require("@trycourier/courier");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");



let otp = "adsasa";

const CLIENT_URL = "http://localhost:3000";
const courier = CourierClient({
    authorizationToken: "dk_prod_KM1KGMXN0SMPCEJE35ZZ48698H41",
  });


  
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email "] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login",
  })
);

router.post(
  "/register",
  async function (req, res) {

    otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log(otp);
   
        User.findOne(
          { username: req.body.username },
            async (err, foundUser) => {
                console.log(req.body.username);
                console.log(foundUser);
              if (err) {
                console.log(err);
              } else if (foundUser === null || foundUser === undefined) {
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
                bcrypt.hash(req.body.password, 10, async (error, hash) => {
                  if (error) {
                    errorOccurred(res, error);
                  } else {
                    const newUser = new User({
                      username: req.body.username,
                      password: hash,
                      name: req.body.name,
                    });
        
                    try {
                        
                      await newUser.save();
                      res.sendStatus(200);
                    } catch (error) {
                      errorOccurred(res, error);
                    }
                  }
                });
              } else {
        
                res.statusCode = 400;
                res.send("Username/Email already exists");
              }
            }
          );
    
  }
);

router.post("/verifyOTP", function (req, res) {
  console.log(req.body.otp);
  if (req.body.otp === otp) {
    // res.send()
    res.sendStatus(200);
  } else {
    console.log("otp is incorrect");
  }
});

router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    console.log(user);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(false);
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
     
      return res.send(true);
    });
  })(req, res, next);
});

router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

  module.exports = router;
