const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  code: { type: String, required: true, maxlength: 100 },
  description: { type: String, maxlength: 100 },
});

SubjectSchema.virtual("url").get(function () {
  return "/home/subject/" + this._id;
});

module.exports = mongoose.model("Subject", SubjectSchema);
