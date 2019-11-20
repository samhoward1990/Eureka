// Dependencies
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Creating a new User Schema object
var PostSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // link: {
    //     type: String,
    //     required: true
    // },
    // notes: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Note"
    // }]
});

//Create using mongoose's model method
var Post = mongoose.model("Post", PostSchema);

// Exporting Article 
module.exports = Post;