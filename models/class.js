const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    id: { type: String, require: true },
    ClassInfo: {
        ClassID: {
            type: String,
            require: true
        },
        Status: { type: String, require: true },
        Subject: {
            type: String,
            require: true
        },

        Grade: {
            type: String,
            require: true
        },
        Routine: {
            type: Date,
            required: true
        },
        Fee: {
            type: Number,
            required: true
        },
        Address: {
            type: Number,
            required: true
        },
        CreatedAt: {
            type: Date,
            default: Date.now
        },
        RetentionTime: {
            type: Date
        }
    },
    TutorInfor: {
        UserID: {
            type: String,
            require: true
        },
        Name: {
            type: String,
            require: true
        },
        Gender: { type: String, require: true },
        DOB: {
            type: String,
            require: true
        },
        CCCD: {
            type: String,
            require: true
        },
        Direct: {
            type: String,
            require: true
        }
    },
    StudentInfor: {
        UserID: {
            type: String,
            require: true
        },
        Name: {
            type: String,
            require: true
        },
        Gender: { type: String, require: true },
        DOB: {
            type: String,
            require: true
        },
        CCCD: {
            type: String,
            require: true
        },
        Direct: {
            type: String,
            require: true
        }
    },
    TransLearner: {
        TransID: { type: String, require: true },
        DateCreate: { type: Date, default: Date.now },
        Fee: { type: String, require: true },
        Content: { type: String, require: true },
        SendAcc: { type: String, require: true },
        Method: { type: String, require: true },
    },
    TransTutor: {
        TransID: { type: String, require: true },
        DateCreate: { type: Date, default: Date.now },
        Fee: { type: String, require: true },
        Content: { type: String, require: true },
        ReceivableAcc: { type: String, require: true },
        Method: { type: String, require: true },
    },
    updateAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Class", ClassSchema)