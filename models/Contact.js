const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    contact: {
      type: String,
      trim: true,
      required: [true, "text is required"],
    },
    createby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: [true, "createby is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
