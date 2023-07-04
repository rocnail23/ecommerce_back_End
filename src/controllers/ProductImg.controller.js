const catchError = require('../utils/catchError');
const ProductImg = require('../models/ProductImg');
const { deleteFromCloudinary, uploadToCloudinary } = require('../utils/couldinary');
const getAll = catchError(async(req, res) => {
    const result = await ProductImg.findAll()
    return res.json(result)
});

const create = catchError(async(req, res) => {
    const { path, filename } = req.file;
    const res1 = await uploadToCloudinary(path, filename);
    console.log(res1)
    const body = { url:res1.url, filename: res1.public_id }
    const image = await ProductImg.create(body);
    return res.status(201).json(image);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const image = await ProductImg.findByPk(id);
    if(!image) return res.sendStatus(404);
    await deleteFromCloudinary(image.filename);
    await image.destroy();
    return res.sendStatus(204);
});

module.exports = {
    getAll,
    create,
    remove
}