const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(cors({ origin: true, Credential: true }));

app.get('/', (req, res) => {
  var rand = Math.random();
  res.setHeader('set-cookie', `random=${rand}`);
  res.send('Cookie ' + `random=${rand}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
