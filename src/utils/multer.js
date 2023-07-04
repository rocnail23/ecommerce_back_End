const multer = require("multer")
const path = require('path');



const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    destination: path.join(__dirname, '..', 'public', 'uploads'),
})

const upload = multer({storage})

module.exports = upload;