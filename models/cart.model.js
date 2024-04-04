var mongoose = require("mongoose");

var cartSchema = new mongoose.Schema({
	idUser: { type: mongoose.Schema.ObjectId },
	products: Array,
});

var cartModel = mongoose.model("carts", cartSchema);

module.exports = cartModel;
