const jwt = require('jwt-simple');
const db = require('../models');
const config = require('../local-config.js');

function tokenForGamer (gamer) {
  console.log(gamer);
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: gamer.username }, config.secret);
}

exports.signup = function(req, res, next) {
  const password = req.body.password;
  const username = req.body.username;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  if(!username || !password) {
    return res.send('Provide password and email');
  }
  db.Gamer.findOne({where: {username: username}})
    .then((data) => {
      if (data) {
        res.send('User name taken');
      }
      else {
        db.Gamer.create({first_name, last_name, username, password, createdAt: new Date(), updatedAt: new Date()})
        .then((gamer) => {
          res.json({token: tokenForGamer(gamer)});
        });
      }
    });
};

exports.signin = function(req, res, next) {
  // User has already had Auth from username and password
  // user has token
  res.send({ token: tokenForGamer(req.body)});

};
