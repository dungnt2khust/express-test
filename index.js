const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
// Add headers before the routes are defined
app.use(cors({ origin: 'https://test-vue-eddieonthecode.firebaseapp.com' }));

app.post('/', (req, res) => {
  var rand = Math.random();
  res.setHeader('set-cookie', `random=${rand}`);
  res.send('Cookie ' + `random=${rand}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
