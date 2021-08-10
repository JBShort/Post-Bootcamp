const Product = require("../models/products.model");

module.exports.index = (req, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Something went wrong owo", error: err}));
}

module.exports.findSingleProduct = (req, res) => {
    // Product.findById(req.params.id) = returns an object instead of an array
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Something went wrong owo", error: err}));
}

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "Something went wrong owo", error: err}));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json({message: "Something went wrong owo", error: err}));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id})
        .then (result => res.json(result))
        .catch(err => res.json({message: "Something went wrong owo", error: err}));
}