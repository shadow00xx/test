const mongoose = require('mongoose');


const FavoriteSchema = new mongoose.Schema({



  Fav:{ type: mongoose.Schema.Types.ObjectId,
        ref: 'Prodects',
      require:true },


       user:{ type: mongoose.Schema.Types.ObjectId,
        ref: 'User' },

},
    { timestamps: true }

);

module.exports = mongoose.model('Favorite', FavoriteSchema)
