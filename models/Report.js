const mongoose = require('mongoose');


const ReportSchema = new mongoose.Schema({

    cos: {
        type: String,
       
    },


      Report:{ type: mongoose.Schema.Types.ObjectId,
        ref: 'Prodects' },


       user:{ type: mongoose.Schema.Types.ObjectId,
        ref: 'User' },

},
    { timestamps: true }

);

// ProdectsSchema.virtual('url').get(function(){
//     return '/prodects/' + this._id
//  })
// ProdectsSchema.index({ name: 'text', description: 'text' });
// ProdectsSchema.index({ "$**": 'text' });

module.exports = mongoose.model('Report', ReportSchema)
