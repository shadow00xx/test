const mongoose = require('mongoose');

const ProdectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
    },
    prise: {
        type: Number,
        required: true,
    },
    image: [{
        type: String,
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        enum: ['Vehicles', 'Electronics', 'Fashions', 'Realestate', 'Makup', 'ForKides', 'Foods', 'Others'],
        required: true,
    },
    cloudinary_id: {
        type: String,
    },
    modal: { type: String },
    gas: { type: String },
    conditions: {
        type: String,
        enum: ['use', 'new'],
    },
    location: { type: String },
    num: { type: Number },
    owners: { type: String, enum: ['owner', 'middle'] },
    reson: {
        type: String,
        enum: ['sale', 'rent'],
    },
    comments: [{
        createdby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        text: {
            type: String,
            required: true,
        },
        avatar: { type: String },
        date: {
            type: Date,
            default: Date.now,
        },
    }],
    Favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    // New report structure. The legacy numeric `report` field is kept for old documents.
    reports: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    report: [{ type: Number }],
}, { timestamps: true });

ProdectsSchema.index({ name: 'text', body: 'text' });

module.exports = mongoose.model('Prodects', ProdectsSchema);
