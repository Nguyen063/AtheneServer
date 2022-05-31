const mongoose = require("mongoose");
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');



//JWT secret
const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

const UserSchema = new mongoose.Schema({
    phone: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    sessions: [{
        token: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Number,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    return _.omit(userObject, ['password', 'sessions']);
}

UserSchema.methods.generateAccessAuthToken = function() {
    const user = this;
    return new Promise((resolve, reject) => {
        jwt.sign({ _id: user._id.toHexString() }, jwtSecret, {
                expiresIn: "15m"
            },
            (err, token) => {
                if (!err) {
                    resolve(token);
                } else {
                    reject();
                }

            })
    })
}

UserSchema.methods.generateRefreshAuthToken = function() {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (!err) {
                let token = buf.toString('hex');
                return resolve(token);
            }
        })
    })
}
UserSchema.methods.createSession = function() {
        let user = this;
        return user.generateRefreshAuthToken().then((refreshToken) => {
            return saveSessionToDatabase(user, refreshToken);
        }).then((refreshToken) => {
            return refreshToken;
        }).catch((e) => {
            return Promise.reject('Failed to save session to database.\n' + e);
        })
    }
    //Model methods
UserSchema.statics.getJWTSecret = () => {
    return jwtSecret;
}
UserSchema.statics.findByIdAndToken = function(_id, token) {
    const User = this;
    return User.findOne({
        _id,
        'sessions.token': token
    });
}
UserSchema.statics.findByCredentials = function(phone, password) {
    let User = this;
    return User.findOne({ phone }).then((user) => {
        if (!user) return Promise.reject();
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) resolve(user);
                else {
                    reject();
                }
            })
        })
    })

}
UserSchema.statics.hasRefreshTokenExpired = (expiresAt) => {
    let secondsSinceEpoch = Date.now() / 1000;
    if (expiresAt > secondsSinceEpoch) {
        return false;
    } else {
        return true;
    }
}

/* MIDDLEWARE */
// Before a user document is saved, this code runs
UserSchema.pre('save', function(next) {
    let user = this;
    let constFactor = 10;
    if (user.isModified('password')) {
        bcrypt.genSalt(constFactor, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();

            })
        })
    } else {
        next();
    }
})

/* HELPER METHODS */
let saveSessionToDatabase = (user, refreshToken) => {
    return new Promise((resolve, reject) => {
        let expiresAt = generateRefreshTokenExpiryTime();
        user.sessions.push({
            'token': refreshToken,
            expiresAt
        });
    })
}
let generateRefreshTokenExpiryTime = () => {
    let daysUntilExpire = "10";
    let secondsUntilExpire = ((daysUntilExpire * 24) * 60) * 60;
    return ((Date.now() / 1000) + secondsUntilExpire);
}

module.exports = mongoose.model('User', UserSchema)