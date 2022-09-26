const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
app.use(
  cors({
    origin: true,
    Credential: true,
  })
);

app.get('/', (req, res) => {
  var cookie = req?.headers?.cookie;
  var random = Math.random();
  res.setHeader('set-cookie', `random=${random}`); // options is optional
  res.send('Cookie add');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
