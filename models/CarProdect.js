const mongoose = require('mongoose');



const CarProdectSchema = new mongoose.Schema({
    section: {
        type: String,
        enum: ['use', 'new']
    },

    name: {
        type: String,
        require: true
    },

    model: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    state: {
        type: String,
        enum: ['use', 'new']
    }
    ,
    des: {
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
    }


},
    { timestamps: true }

)

module.exports = mongoose.model('CarProdect', CarProdectSchema)
