const express = require("express");
const app = express();
const { Nuxt } = require('nuxt');
const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config);

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

var FACEBOOK_APP_ID = "288274442123414";
var FACEBOOK_APP_SECRET = "a6b1b4e363921d3f25a9b276b3060010";

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session()); 

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'posts']
  },
  function(accessToken, refreshToken, profile, done) {
  	console.log(profile._json.name);
  	console.log(profile._json.id);
    console.log(profile._json.posts.data);
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

app.listen(3000);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook'));

app.use(nuxt.render);