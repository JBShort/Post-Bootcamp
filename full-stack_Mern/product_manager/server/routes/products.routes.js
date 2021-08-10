const ProductController = require("../controllers/products.controller")

// this is backend routing for axios and postman your actual web app routing is in App.js
module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findSingleProduct);
    app.post('/api/new', ProductController.createProduct);
    app.put('/api/updateProducts/:id', ProductController.updateProduct);
    app.delete('/api/delete/:id', ProductController.deleteProduct);
}