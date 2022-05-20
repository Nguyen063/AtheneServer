const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
    Name: {
        type: String,
        require: true
    },
    Ava: { type: String, require: true },

    Direct: {
        type: String,
        require: true
    },

    Gender: {
        type: String,
        require: true
    },

    Subject: {
        type: String,
        require: true
    },

    Fee: {
        type: String,
        require: true
    },

    Education: {
        type: String,
        require: true
    },

    class: {
        type: String,
            require: true
    },
    Level: {
        type: Date,
        require: true
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model("Tutor", TutorSchema)