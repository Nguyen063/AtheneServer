const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntroSchema= new Schema({
    tile:{
        type: String,
        require: true
    },
    tile1:{
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    content1:{
        type: String,
        require: true
    },
    content2:{
        type: String,
        require: true
    },
    content3:{
        type: String,
        require: true
    },
    content4:{
        type: String,
        require: true
    },
    content5:{
        type: String,
        require: true
    },
    content6:{
        type: String,
        require: true
    },
    content7:{
        type: String,
        require: true}
   
})
module.exports = mongoose.model("Intro", IntroSchema)
