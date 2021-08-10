const Author = require("../models/authors.model");

module.exports = {
    // finding all authors
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => {
                console.log("All Authors: ", allAuthors);
                res.json(allAuthors);
            })
            .catch(err => {
                console.log("All Errors: ", err);
                res.status(400).json(err);
            })
    },

    // finding a single author
    findOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(singleAuthor => {
                console.log("Single Author:", singleAuthor);
                res.json(singleAuthor);
            })
            .catch(err => {
                console.log("error: ", err);
                res.status(400).json(err);
            })
    },

    // create new author
    create: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                console.log("Created a new Author: ", newAuthor);
                res.json(newAuthor);
            })
            .catch(err => {
                console.log("Author Creation Error:", err)
                res.status(400).json(err);
            })
    },

    // update an author
    update: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(updatedAuthor => {
                console.log("updated Author:", updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch(err => {
                console.log("Error on updating", err);
                res.status(400).json(err);
            })
    },

    // delete an author
    deleteSingle: (req, res) => {
        console.log("yeeting: ", req.params.id);
        Author.deleteOne({_id: req.params.id})
            .then(result => res.json({result: result}))
            .catch(err => res.status(400).json({message: "deletion error", error: err}))
    }
}