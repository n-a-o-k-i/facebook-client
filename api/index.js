const app = require('express')()
module.exports = { path: '/api', handler: app }
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

var FACEBOOK_APP_ID = "288274442123414";
var FACEBOOK_APP_SECRET = "a6b1b4e363921d3f25a9b276b3060010";

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

var server = require('http').createServer(app);
var port = 3000;

server.listen(port);

app.get('/hello', (req, res) => {
    console.log('hello nuxt in text')
    res.send('world')
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));