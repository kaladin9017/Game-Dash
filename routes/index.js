const router = require("express").Router();
const path = require("path");
// const models = require("../models");
const axios = require("axios");
axios.defaults.headers.post['Content-Type'] = 'application/json';


router.route('/api/fetchAuthorizationCode')
.post((req, res) => {
  let secret = "5fB2Oo0htnapgMzoq8Mef19YddjG6nqsUmzx6TMJ";
  let clientId = "81577ff7ba9943ca8b95aef5656bc783";
  let clientSecret = clientId + ":" + secret;
  let encodedClientSecret = Buffer.from(clientSecret, 'ascii').toString('base64');
  encodedClientSecret = "Basic " + encodedClientSecret;
  axios({
    method: "post",
    url: "https://login.eveonline.com/oauth/token",
    headers: {
      Authorization: encodedClientSecret,
      Host: 'login.eveonline.com'
    },
    params: {
      grant_type: "authorization_code",
      code: req.body.token
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
