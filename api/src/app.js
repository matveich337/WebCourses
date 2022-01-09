const express = require('express');

const config = require('./services/config');

const app = express();
const port = config.appPort;

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
