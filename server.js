const express = require('express');

const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('public'))


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})


app.listen(3000);
