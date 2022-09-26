const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
const corsConfig = {
  credentials: true,
  origin: 'https://test-vue-eddieonthecode.firebaseapp.com/',
};
app.use(cors(corsConfig));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
