const express = require('express');
const bodyParser = require('body-parser');
const config = require('./services/config');
const cors = require('cors');
const multer = require('multer')
const multerConfig = require('./services/multer-config')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/media", express.static("media"));
app.use(multer(multerConfig).single("filedata"));

const port = config.appPort;

require('./routes/users')(app);
require('./routes/blogs')(app);
require('./routes/likes')(app);
require('./routes/comments')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
