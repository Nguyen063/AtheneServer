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

    thumbPath: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Homepage", HomePageSchema)