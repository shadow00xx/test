const mongoose = require('mongoose');


const ProdectsSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    address: {
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

    image: [{
        type: String,
       
    }],
    // images: [{
       
    //     public_id:{type: String,
    //         require: true},
    //         url:{type: String,
    //             require: true}
    // }],
  
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    category: {
        type: String,
        enum: ['Vehicles', 'Electronics', 'Fashions', 'Realestate', 'Makup', 'ForKides', 'Foods', 'Others'],
        required: true
    },
      
    cloudinary_id: {
        type: String,
      },

    // cars
    modal: {
        type: String,
    },
    gas: { type: String },

    conditions: {
        type: String,
        enum: ['use', 'new']
    },

    // realstate
    location: { type: String }, num: { type: Number },
    owners: { type: String ,enum: ['owner', 'middle']},
    reson: {
        type: String,
        enum: ['sale', 'rent']
    }
      ,
      comments: [
        {
            createdby: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' 
          },
          text: {
            type: String,
            required: true
          },
        
          avatar: {
            type: String
          },
          date: {
            type: Date,
            default: Date.now
          }
        }
      ],

      Favorite:[{ type: mongoose.Schema.Types.ObjectId,
        ref: 'User' }],

        report:[{ type: mongoose.Schema.Types.ObjectId,
        ref: 'User' }],
  

},
    { timestamps: true }

);


ProdectsSchema.index({ name: 'text', description: 'text' });
// ProdectsSchema.index({ "$**": 'text' });

module.exports = mongoose.model('Prodects', ProdectsSchema)
