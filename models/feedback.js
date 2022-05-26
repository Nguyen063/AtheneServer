const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    Name: {
        type: String,
        require: true
    },

    DateSend: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        require: true
    },
    updateAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model("Feedback", FeedbackSchema)

const ReplyFeedbackSchema = new Schema({
    Name: {
        type: String = "Admin",
        require: true
    },

    DateSend: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        require: true
    },
    updateAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model("ReplyFeedback", ReplyFeedbackSchema)