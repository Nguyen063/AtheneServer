const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },

    title1: {
        type: String,
        require: true
    },
    content1_1: {
        type: String,
        require: true
    },

    content1_2: {
        type: String,
        require: true
    },

    title2: {
        type: String,
        require: true
    },

    content2_1: {
        type: String,
        require: true
    },

    content2_2: {
        type: String,
        require: true
    },
    content2_3: {
        type: String,
        require: true
    },
    title3: {
        type: String,
        require: true
    },
    content3_1: {
        type: Date,
        require: true
    },

    content3_2: {
        type: String,
        require: true
    },
    title4: {
        type: String,
        require: true
    },
    content4_1: {
        type: String,
        require: true
    },
    title5: {
        type: String,
        require: true
    },
    content5_1: {
        type: String,
        require: true
    },
    title6: {
        type: String,
        require: true
    },
    content6_1: {
        type: String,
        require: true
    },
    content6_2: {
        type: String,
        require: true
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model("Data", DataSchema)