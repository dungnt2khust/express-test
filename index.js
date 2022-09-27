const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
// Add headers before the routes are defined
app.use(cors({ origin: 'https://test-vue-eddieonthecode.firebaseapp.com' }));

app.post('/', (req, res) => {
  var cookie = req?.headers?.cookie;
  res.send('Cookie ' + cookie);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
