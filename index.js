const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
var fs = require('fs');
var words = [];
// Add headers before the routes are defined
app.use(cors({ origin: 'https://test-vue-eddieonthecode.firebaseapp.com' }));

app.get('/', (req, res) => {
  var data = fs.readFileSync('data.json', 'utf8');
  words = JSON.parse(data);
  var cookie = req?.headers?.cookie;
  if (cookie) res.send('Cookie ' + cookie);
});

app.post('/', (req, res) => {
  var cookie = req?.headers?.cookie;
  if (cookie == '050201') {
    var data = fs.readFileSync('data.json', 'utf8');
    words = JSON.parse(data);
    words.push(new Date());
    fs.writeFile('data.json', JSON.stringify(words), 'utf8');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
