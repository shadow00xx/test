const mongoose = require('mongoose');



const ProdectsSchema = new mongoose.Schema({

    catogery: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },

    body: {
        type: String,
        require: true
    },

    prise: {
        type: Number,
        require: true
    },

    image: {
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // cars
    modal: {
        type: String,
    }, gas: { type: String }, conditions: { type: String },



},
    { timestamps: true }

)

module.exports = mongoose.model('Prodects', ProdectsSchema)
