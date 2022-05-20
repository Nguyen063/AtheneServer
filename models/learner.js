const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LearnerSchema = new Schema({
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

    request: {
        type: String,
        require: true
    },
    grade: {
        type: String,
        require: true
    },
    caphoc: {
        type: String,
        require: true
    },




    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Learner", LearnerSchema)