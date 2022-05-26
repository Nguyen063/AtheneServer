const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntroSchema = new Schema({
    title: {
        type: String,
        require: true
    },

    title1: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },

    content1: {
        type: String,
        require: true
    },

    content2: {
        type: String,
        require: true
    },

    content3: {
        type: String,
        require: true
    },

    content4: {
        type: String,
        require: true
    },

    content5: {
        type: String,
        require: true
    },
    content6: {
        type: Date,
        require: true
    },

    content7: {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: true
    },
    imgStudent: {
        type: String,
        require: true
    },
    imgParent: {
        type: String,
        require: true
    },
    imgTutor: {
        type: String,
        require: true
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model("Intro", IntroSchema)