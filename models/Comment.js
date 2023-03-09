const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: [true, "text is required"],
    },
    createby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: [true, "createby is required"],
    },
    prodect_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prodects",
      // required: [true, "Post is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
