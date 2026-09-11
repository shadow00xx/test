const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 80,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    provider: {
        type: String,
        enum: ['local', 'google', 'facebook'],
    },
    displayName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 120,
    },
    firstName: {
        type: String,
        trim: true,
        maxlength: 80,
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 80,
    },
    image: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
    isVerified: { type: Boolean, default: false },
    isStore: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isowner: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
