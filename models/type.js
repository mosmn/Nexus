const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

TypeSchema.virtual("url").get(function () {
  return "/home/types/" + this._id;
});

module.exports = mongoose.model("Type", TypeSchema);
