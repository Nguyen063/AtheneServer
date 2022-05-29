const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LearnerSchema = new Schema({
    TutorInfo: {
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
        DOB: {
            type: Date,
            required: true
        },
        CCCD: {
            type: Number,
            required: true
        },
        PhoneNumbe: {
            type: Number,
            required: true
        },
        Exp: {
            type: String,
            require: true
        },
        Degree: {
            type: String,
            require: true
        },
        Education: {
            type: String,
            require: true
        },
        Majoy: {
            type: String,
            require: true
        }
    },
    LearnerFinding: {
        Caphoc: {
            type: String,
            require: true
        },
        Subject: {
            type: String,
            require: true
        },
        LearnerGender: { type: String, require: true },
        Location: {
            type: String,
            require: true
        },
        TeachingTime: {
            type: String,
            require: true
        },
        Schedule: {
            type: String,
            require: true
        },
        Fee: {
            type: String,
            require: true
        },
        Other: {
            type: String,
            require: true
        }
    },
    TutorManage: {
        UserID: { type: String, required: true },
        CreatedAt: { type: Date, default: Date.now },
        TotalClass: { type: String, required: true },
        ClassID: { type: String, required: true }
    },
    TransTutor: {
        TransID: { type: String, required: true },
        DateCreate: { type: Date, default: Date.now },
        Fee: { type: String, required: true },
        Content: { type: String, required: true },
        ReceivableAcc: { type: String, required: true },
    },

    CreateAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model("Learner", LearnerSchema)