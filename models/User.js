const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    username: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },
    googleId: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },

},
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)