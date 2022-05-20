const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    thumbPath: { type: String, require: true },
    followers: {
        type: String,
        require: true
    },
    direct: {
        type: String,
        require: true
    },

    gender: {
        type: String,
        require: true
    },

    subject: {
        type: String,
        require: true
    },

    fee: {
        type: String,
        require: true
    },

    education: {
        type: String,
        require: true
    },

    class: {
        type: String,
            require: true
    },
    level: {
        type: String,
        require: true
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model("Tutor", TutorSchema)