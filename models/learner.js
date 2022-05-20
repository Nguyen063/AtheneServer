const LearnerSchema = new Schema({
    Name: {
        type: String,
        require: true
    },
    Ava: {
        type: String,
        require: true
    },
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
    Request: {
        type: String,
        require: true
    },
    Grade: {
        type: String,
        require: true
    },
    School: {
        type: String,
        require: true
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },


})
module.exports = mongoose.model("Learner", LearnerSchema)