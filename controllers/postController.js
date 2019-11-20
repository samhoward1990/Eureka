const db = require("../config/models");
const bcrypt = require("bcrypt");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Post.find(req.query)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log("HEY, WE REACHED POST CREATE")
    db.Post.create(req.body)
      .then(dbPost => {
        console.log('dbPost', dbPost);
        res.json(dbPost);
    })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)});
  },
};