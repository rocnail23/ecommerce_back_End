const { getAll,create ,remove} = require('../controllers/ProductImg.controller');
const express = require('express');
const productImgRouter = express.Router();

const upload = require("../utils/multer")


productImgRouter.route('/')
    .get(getAll)
    .post(upload.single("image"),create)


productImgRouter.route("/:id")
.delete(remove)    

module.exports = productImgRouter;