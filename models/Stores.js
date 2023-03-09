const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    store: {
      type: String,
      required: [true, "text is required"],
    },
    createby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    
    },
    prodects: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prodects",
      
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", StoreSchema);
