const router = require("express").Router();
const path = require("path");
const passportService = require('../services/passport');
const passport = require('passport');

// AUTH STUFF
const authentication = require('../controller/authentication');

// passport STUFF
const requireSignin = passport.authenticate('local', { session: false });

const axios = require("axios");

router.route('/api/signup')
  .post(authentication.signup);

router.route('/api/signin')
  .post(requireSignin, authentication.signin);

router.route('/api/fetchAuthorizationCodeWithRefreshToken')
.post((req, res) => {
  let encodedClientSecret = req.body.encodedClientSecret;
  axios({
    method: "post",
    url: "https://login.eveonline.com/oauth/token",
    headers: {
      Authorization: encodedClientSecret,
      Host: 'login.eveonline.com',
      "Content-Type": 'application/json'
    },
    params: {
      grant_type: "refresh_token",
      refresh_token: req.body.refreshToken
    }
  })
  .then((data) => {
    res.send(data.data);
  })
  .catch((err) => {
    res.sendStatus(500);
  });
});

router.route('/api/fetchAuthorizationCode')
.post((req, res) => {
  let encodedClientSecret = req.body.encodedClientSecret;
  axios({
    method: "post",
    url: "https://login.eveonline.com/oauth/token",
    headers: {
      Authorization: encodedClientSecret,
      Host: 'login.eveonline.com',
      "Content-Type": 'application/json'
    },
    params: {
      grant_type: "authorization_code",
      code: req.body.authToken
    }
  })
  .then((data) => {
    res.send(data.data);
  })
  .catch((err) => {
    res.sendStatus(500);
  });
});

module.exports = router;
