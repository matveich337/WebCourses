const express = require('express');
const bodyParser = require('body-parser');
const config = require('./services/config');
const cors = require('cors');
const multer = require('multer')
const path = require('path');
const { unlink } = require('fs');
const { models } = require('./services/sequelize');
const app = express();

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/media", express.static("media"));
app.use(multer({
  storage: storageConfig, fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  }
}).single("filedata"));

const port = config.appPort;

require('./routes/users')(app);
require('./routes/blogs')(app);
require('./routes/likes')(app);
require('./routes/comments')(app);

app.post('/user-avatar/:id', async function (req, res, next) {
  let filedata = req.file;

  if (!filedata) {
    return res.status(400).send({ message: 'bad request' });
  } else {
    const user = await models.users.findByPk(req.params.id);
    const currentImage = user.dataValues.profile_image;

    if (currentImage) {
      await unlink('./' + currentImage, (err) => {
        if (err) throw err;
      });
    }

    await models.users.update({ profile_image: "/media/" + req.file.filename }, { where: { user_id: req.params.id } }).then(function () {
      return res.status(200).end();
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
