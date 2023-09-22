const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 100 },
  type: { type: Schema.Types.ObjectId, ref: "Type" },
  uploaded_by: { type: Schema.Types.ObjectId, ref: "User" },
  date_uploaded: { type: Date, required: true, default: Date.now },
  belongs_to: { type: Schema.Types.ObjectId, ref: "Subject" },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Unavailable"],
    default: "Available",
  },
});

MaterialSchema.virtual("url").get(function () {
  return "/materials/" + this._id;
});

module.exports = mongoose.model("Material", MaterialSchema);
