const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormLearnerSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    phone: {
        type: number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpw: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    addressnumber: {
        type: String,
        require: true
    },
    ward: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    identification: {
        type: String,
        require: true
    },
    dateprovided: {
        type: Date,
        require: true
    },
   
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model("FormLearner", FormLearnerSchema)