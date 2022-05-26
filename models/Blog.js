const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    id: {
        type: String,
        // require: true
    },
    name: {
        type: String,
        // require: true
    },
    author: {
        type: String,
        // require: true
    },
    content: {
        type: String,
        // require: true

    },

    title1: {
        type: String,
        // require: true

    },
    content1: {
        type: String,
        // require: true

    },
    title2: {
        type: String,
        // require: true

    },
    content2: {
        type: String,
        // require: true

    },
    title3: {
        type: String,
        // require: true

    },
    content3: {
        type: String,
        // require: true

    },
    thumbPath1: { type: String },
    thumbPath2: { type: String },
    thumbPath: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Blog", BlogSchema)