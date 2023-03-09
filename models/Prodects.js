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

    image: {
        type: String,
    },
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    category: {
        type: String,
        enum: ['Vehicles', 'Electronics', 'Fashions', 'Realestate', 'Makup', 'ForKides', 'Foods', 'Others'],
        required: true
    },
    img: {
        public_id: {
            type: 'string',
        },
        secure_url: {
            type: 'string',
        }
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

// ProdectsSchema.virtual('url').get(function(){
//     return '/prodects/' + this._id
//  })
ProdectsSchema.index({ name: 'text', description: 'text' });
// ProdectsSchema.index({ "$**": 'text' });

module.exports = mongoose.model('Prodects', ProdectsSchema)
