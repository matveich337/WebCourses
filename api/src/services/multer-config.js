
const path = require('path');
const multer = require('multer')

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

const multerConfig = {
    storage: storageConfig, fileFilter: function (_req, file, cb) {
        checkFileType(file, cb);
    }
}

module.exports = multerConfig;
