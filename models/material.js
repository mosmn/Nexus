const mongoose = require("mongoose");
const { DateTime } = require("luxon");


const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 100 },
  file: { type: String, required: true },
  type: { type: Schema.Types.ObjectId, ref: "Type" },
  uploaded_by: { type: Schema.Types.ObjectId, ref: "User", default: "650d495e66cbd41a23c5a2c4" },
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
  return "/home/material/" + this._id;
});

MaterialSchema.virtual("date_uploaded_formatted").get(function () {
  return DateTime.fromJSDate(this.date_uploaded).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Material", MaterialSchema);
