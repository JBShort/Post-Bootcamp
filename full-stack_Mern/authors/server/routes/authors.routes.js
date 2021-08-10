const AuthorController = require("../controllers/authors.controller");

// this is backend routing for axios and/or postman. Your actual web app routing is in App.js
module.exports = app => {
    app.get('/api/authors', AuthorController.findAll);
    app.get('/api/authors/:id', AuthorController.findOne);
    app.post('/api/authors/new', AuthorController.create);
    app.put('/api/authors/update/:id', AuthorController.update);
    app.delete('/api/authors/delete/:id', AuthorController.deleteSingle);
}