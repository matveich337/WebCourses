const express = require('express');
const bodyParser = require('body-parser');
const config = require('./services/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = config.appPort;

require('./routes/users')(app);
require('./routes/blogs')(app);
require('./routes/likes')(app);
require('./routes/comments')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
