var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    wallet: { type: Number },
    avatar: { type: String },
    role: { type: String },
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
