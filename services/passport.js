const passport = require('passport');
const db = require('../models');
const config = require('../local-config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


const localOptions = { usernameField: 'username'};

const localLogin = new LocalStrategy(localOptions, function(username, password, done) {
// Verify email and Password
// if true call done with user
// else call done with false

  db.Gamer.findOne({where : {username: username}})
    .then((gamer) => {
      if(!gamer) {return done(null, false);}
      gamer.comparePassword(password, function(err, isMatch) {
        if(err) { return done(err); }
        if(!isMatch) { return done(null, false); }

        return done(null, gamer);
      });
    });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};
// Create Strategy

// payload is decoded JwtToken
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {

// Check if user.id in payload exist in our database
// if true call done with user object
// else call done without user object
  db.Gamer.findOne({where: {id: payload.sub}})
  .then((gamer) => {
    if(gamer) {
      done(null, gamer);
    } else {
      done(null, false);
    }
  });

});

passport.use(jwtLogin);
passport.use(localLogin);

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYsImlhdCI6MTQ4NzAyMTk3NzQ4N30.MhqQqjbGLjmSkiu21jRBd6YsAC3JgOn-iVQt5dyXRNI
