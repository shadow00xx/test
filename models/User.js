const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    accountId: {
        type: String,
        // required: true,
    },   
      provider: {
        type: String,
      },
    displayName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    image: {
        type: String,
    },
    isVerified: { type: Boolean, default: false },

},
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)