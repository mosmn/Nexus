const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxlength: 100 },
  password: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, maxlength: 100 },
  first_name: { type: String, required: true, maxlength: 100 },
  last_name: { type: String, required: true, maxlength: 100 },
  is_admin: { type: Boolean, required: true, default: false },
  is_active: { type: Boolean, required: true, default: true },
  date_joined: { type: Date, required: true, default: Date.now },
  points: { type: Number, required: true, default: 0 },

  // virtuals:
  // name: { type: String, required: true, maxlength: 100 },
 // url: { type: String, required: true, maxlength: 100 },
});

//virtuals are additional fields that you can define on a model but do not get persisted to the database. 
UserSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.last_name) {
    fullname = this.first_name + " " + this.last_name;
  }

  return fullname;
});

UserSchema.virtual("url").get(function () {
  return "/users/" + this._id;
});

module.exports = mongoose.model("User", UserSchema);
