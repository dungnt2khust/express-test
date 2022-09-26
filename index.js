const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));
app.get('/', (req, res) => {
  var cookie = req?.headers?.cookie;
  res.send('Cookie ' + cookie);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
