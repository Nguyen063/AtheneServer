const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    TransInfo: {
        TransId: {
            type: String,
            require: true
        },
        DateCreate: { type: Date, default: Date.now },
        Fee: {
            type: String,
            require: true
        },

        Content: {
            type: String,
            require: true
        },

        Method: {
            type: String,
            require: true
        }
    },
    ReceivableAcc: {
        Bank: {
            type: String,
            require: true
        },
        STK: {
            type: Number,
            require: true
        }
    },
    SendAcc: {
        Bank: {
            type: String,
            require: true
        },
        STK: {
            type: Number,
            require: true
        }
    },
    updateAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model("Transaction", TransactionSchema)