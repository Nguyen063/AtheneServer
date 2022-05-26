const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TutorSchema = new Schema({


    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Tutor", TutorSchema)