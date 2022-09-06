const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");
const Event = require("../models/event");
const bcrypt = require("bcrypt");



passport.use(User.createStrategy());
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      },
      function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate(
          { googleId: profile.id, username: profile._json.email },
          function (err, user) {
            return cb(err, user);
          }
        );
      }
    )
  );

  
passport.use(
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
      async (username, password, done) => {
        try {
          User.findOne(
            { $or: [{ username: username }, { email: username }] },
            async (err, foundUser) => {
                console.log(foundUser);
              if (err) {
                console.log(err);
                return done(err);
              } else if (!foundUser) {
                return done(null, false, { message: "Unknown User " + username });
              } else {

                await bcrypt.compare(
                  password,
                  foundUser.password,
                  (error, result) => {
                    if (error) {
                      return done(null, false, error);
                    } else {
                      if (result) {
                        return done(null, foundUser);
                      } else {
                        return done(null, false, {
                          message: `Password didn't match`,
                        });
                      }
                    }
                  }
                );
              }
            }
          );
        } catch (error) {
          console.log(error);
          done(error);
        }
      }
    )
  );
  
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});