const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomePageSchema = new Schema({
    title: {
        type: String,
        require: true

    },
    content: {
        type: String,
        require: true

    },
    title1: {
        type: String,
        require: true

    },
    content1: {
        type: String,
        require: true

    },
    title2: {
        type: String,
        require: true

    },
    content2: {
        type: String,
        require: true

    },
    title3: {
        type: String,
        require: true

    },
    content3: {
        type: String,
        require: true

    },
    id: {
        type: String,
        require: true

    },
    thumbPath: { type: String, require: true },
    thumbPath1: { type: String, require: true },
    thumbPath2: { type: String, require: true },
    thumbPath3: { type: String, require: true },
    thumbPathOur: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Homepage", HomePageSchema)